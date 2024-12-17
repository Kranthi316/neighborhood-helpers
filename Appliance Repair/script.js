// script.js
const providersData = [
    { id: 1, name: "Repair Expert A", location: "Location A", price: 50, distance: 10, rating: 4.7 },
    { id: 2, name: "Repair Expert B", location: "Location B", price: 60, distance: 15, rating: 4.2 },
    { id: 3, name: "Repair Expert C", location: "Location C", price: 40, distance: 5, rating: 4.8 },
    { id: 4, name: "Repair Expert D", location: "Location D", price: 70, distance: 20, rating: 3.9 }
];

let filteredProviders = [...providersData];

const providerContainer = document.getElementById("providers");
const priceFilter = document.getElementById("price");
const distanceFilter = document.getElementById("distance");
const priceValue = document.getElementById("priceValue");
const distanceValue = document.getElementById("distanceValue");

const providerProfileModal = document.getElementById("providerProfile");
const providerName = document.getElementById("providerName");
const providerLocation = document.getElementById("providerLocation");
const providerPrice = document.getElementById("providerPrice");
const providerDistance = document.getElementById("providerDistance");
const providerRating = document.getElementById("providerRating");
const closeProfileBtn = document.getElementById("closeProfile");
const bookServiceBtn = document.getElementById("bookService");

const renderProviders = () => {
    providerContainer.innerHTML = "";
    filteredProviders.forEach(provider => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${provider.name}</h3>
            <p>Location: ${provider.location}</p>
            <p class="price">Price: $${provider.price}</p>
            <p class="distance">Distance: ${provider.distance} km</p>
            <p>Rating: ${provider.rating} / 5</p>
        `;
        card.addEventListener("click", () => openProviderProfile(provider));
        providerContainer.appendChild(card);
    });
};

// Open provider profile modal
const openProviderProfile = (provider) => {
    providerName.textContent = provider.name;
    providerLocation.textContent = provider.location;
    providerPrice.textContent = provider.price;
    providerDistance.textContent = provider.distance;
    providerRating.textContent = provider.rating;

    providerProfileModal.style.display = "flex";
};

// Close provider profile modal
closeProfileBtn.addEventListener("click", () => {
    providerProfileModal.style.display = "none";
});

// Book service
bookServiceBtn.addEventListener("click", () => {
    alert(`Service booked with ${providerName.textContent}`);
    providerProfileModal.style.display = "none";
});

// Apply filters
const applyFilters = () => {
    const maxPrice = parseInt(priceFilter.value);
    const maxDistance = parseInt(distanceFilter.value);

    priceValue.textContent = `$${maxPrice}`;
    distanceValue.textContent = `${maxDistance} km`;

    filteredProviders = providersData.filter(provider =>
        provider.price <= maxPrice && provider.distance <= maxDistance
    );
    renderProviders();
};

// Event listeners
priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);

// Initial render
applyFilters();
