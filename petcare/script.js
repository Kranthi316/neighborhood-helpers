// script.js

const providersData = [
    { id: 1, name: "Pet Care Pro A", location: "Downtown", price: 50, distance: 10, rating: 4.8 },
    { id: 2, name: "Pet Care Pro B", location: "Midtown", price: 70, distance: 15, rating: 4.5 },
    { id: 3, name: "Pet Care Pro C", location: "Uptown", price: 40, distance: 5, rating: 4.9 },
    { id: 4, name: "Pet Care Pro D", location: "City Center", price: 100, distance: 20, rating: 4.2 }
];

const providersContainer = document.getElementById("providers");
const priceFilter = document.getElementById("priceFilter");
const distanceFilter = document.getElementById("distanceFilter");
const priceValue = document.getElementById("priceValue");
const distanceValue = document.getElementById("distanceValue");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const providerName = document.getElementById("providerName");
const providerLocation = document.getElementById("providerLocation");
const providerPrice = document.getElementById("providerPrice");
const providerDistance = document.getElementById("providerDistance");
const providerRating = document.getElementById("providerRating");
const bookServiceButton = document.getElementById("bookService");

let filteredProviders = [...providersData];

// Function to render providers
const renderProviders = () => {
    providersContainer.innerHTML = "";
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
        card.addEventListener("click", () => openModal(provider));
        providersContainer.appendChild(card);
    });
};

// Function to open modal
const openModal = (provider) => {
    providerName.textContent = provider.name;
    providerLocation.textContent = provider.location;
    providerPrice.textContent = provider.price;
    providerDistance.textContent = provider.distance;
    providerRating.textContent = provider.rating;
    modal.style.display = "flex";
};

// Function to close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
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

// Initialize
priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);
applyFilters();

