// script.js
const providersData = [
    { id: 1, name: "Provider A", location: "Location A", price: 30, distance: 5, rating: 4.5 },
    { id: 2, name: "Provider B", location: "Location B", price: 40, distance: 10, rating: 4.0 },
    { id: 3, name: "Provider C", location: "Location C", price: 25, distance: 3, rating: 4.8 },
    { id: 4, name: "Provider D", location: "Location D", price: 50, distance: 12, rating: 3.9 }
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

// Open the provider profile in a modal
const openProviderProfile = (provider) => {
    providerName.textContent = provider.name;
    providerLocation.textContent = provider.location;
    providerPrice.textContent = provider.price;
    providerDistance.textContent = provider.distance;
    providerRating.textContent = provider.rating;

    providerProfileModal.style.display = "flex";
};

// Close the provider profile modal
closeProfileBtn.addEventListener("click", () => {
    providerProfileModal.style.display = "none";
});

// Book service (for now just log it)
bookServiceBtn.addEventListener("click", () => {
    alert(`Booking service with ${providerName.textContent}`);
    providerProfileModal.style.display = "none";
});

// Filter function to apply price and distance filters
const applyFilters = () => {
    const price = parseInt(priceFilter.value);
    const distance = parseInt(distanceFilter.value);

    priceValue.textContent = `$${price}`;
    distanceValue.textContent = `${distance} km`;

    filteredProviders = providersData.filter(provider =>
        provider.price <= price && provider.distance <= distance
    );
    renderProviders();
};

// Event listeners for filters
priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);

// Initial rendering of providers
applyFilters();
