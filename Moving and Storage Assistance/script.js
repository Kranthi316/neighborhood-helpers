// script.js
const providersData = [
    { id: 1, name: "Mover A", location: "City Center", price: 300, distance: 20, rating: 4.5 },
    { id: 2, name: "Mover B", location: "East Side", price: 200, distance: 15, rating: 4.2 },
    { id: 3, name: "Mover C", location: "West End", price: 350, distance: 30, rating: 4.8 },
    { id: 4, name: "Mover D", location: "Uptown", price: 250, distance: 10, rating: 4.0 },
    { id: 5, name: "Storage Co.", location: "South Side", price: 400, distance: 50, rating: 3.9 }
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

const openProviderProfile = (provider) => {
    providerName.textContent = provider.name;
    providerLocation.textContent = provider.location;
    providerPrice.textContent = provider.price;
    providerDistance.textContent = provider.distance;
    providerRating.textContent = provider.rating;

    providerProfileModal.style.display = "flex";
};

closeProfileBtn.addEventListener("click", () => {
    providerProfileModal.style.display = "none";
});

bookServiceBtn.addEventListener("click", () => {
    alert(`Service booked with ${providerName.textContent}`);
    providerProfileModal.style.display = "none";
});

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

priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);

applyFilters();
