// script.js
const providersData = [
    { id: 1, name: "WoodCraft Interiors", location: "MG Road, Bangalore", price: 3000, distance: 10, rating: 4.5 },
    { id: 2, name: "Elegant Upholstery", location: "Koramangala, Bangalore", price: 4500, distance: 15, rating: 4.8 },
    { id: 3, name: "Polish Masters", location: "Whitefield, Bangalore", price: 2000, distance: 8, rating: 4.2 },
    { id: 4, name: "Home Furniture Pros", location: "Indiranagar, Bangalore", price: 4000, distance: 12, rating: 4.7 },
];

let filteredProviders = [...providersData];

const providerContainer = document.getElementById("providers");
const priceFilter = document.getElementById("price");
const distanceFilter = document.getElementById("distance");
const priceValue = document.getElementById("priceValue");
const distanceValue = document.getElementById("distanceValue");

const profileModal = document.getElementById("providerProfile");
const providerName = document.getElementById("providerName");
const providerLocation = document.getElementById("providerLocation");
const providerPrice = document.getElementById("providerPrice");
const providerDistance = document.getElementById("providerDistance");
const providerRating = document.getElementById("providerRating");
const closeProfile = document.getElementById("closeProfile");
const bookServiceBtn = document.getElementById("bookService");

const renderProviders = () => {
    providerContainer.innerHTML = "";
    filteredProviders.forEach(provider => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${provider.name}</h3>
            <p>Location: ${provider.location}</p>
            <p class="price">Price: ₹${provider.price}</p>
            <p class="distance">Distance: ${provider.distance} km</p>
            <p>Rating: ${provider.rating} / 5</p>
        `;
        card.addEventListener("click", () => showProfile(provider));
        providerContainer.appendChild(card);
    });
};

const showProfile = (provider) => {
    providerName.textContent = provider.name;
    providerLocation.textContent = provider.location;
    providerPrice.textContent = provider.price;
    providerDistance.textContent = provider.distance;
    providerRating.textContent = provider.rating;
    profileModal.style.display = "flex";
};

closeProfile.addEventListener("click", () => {
    profileModal.style.display = "none";
});

bookServiceBtn.addEventListener("click", () => {
    alert(`Service booked with ${providerName.textContent}`);
    profileModal.style.display = "none";
});

const applyFilters = () => {
    const maxPrice = parseInt(priceFilter.value);
    const maxDistance = parseInt(distanceFilter.value);

    priceValue.textContent = `₹${maxPrice}`;
    distanceValue.textContent = `${maxDistance} km`;

    filteredProviders = providersData.filter(provider => 
        provider.price <= maxPrice && provider.distance <= maxDistance
    );
    renderProviders();
};

priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);

// Initial rendering
applyFilters();
