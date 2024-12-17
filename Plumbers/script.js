// script.js
const plumberData = [
    { id: 1, name: "John Doe", location: "Downtown", price: 100, distance: 10, rating: 4.5 },
    { id: 2, name: "Jane Smith", location: "Uptown", price: 120, distance: 5, rating: 4.8 },
    { id: 3, name: "Mike Johnson", location: "Suburbs", price: 90, distance: 15, rating: 4.2 },
    { id: 4, name: "Emily Davis", location: "City Center", price: 150, distance: 8, rating: 4.9 },
];

let filteredPlumbers = [...plumberData];

const serviceContainer = document.getElementById("services");
const priceFilter = document.getElementById("price");
const distanceFilter = document.getElementById("distance");
const priceValue = document.getElementById("priceValue");
const distanceValue = document.getElementById("distanceValue");

const modal = document.getElementById("profileModal");
const closeModal = document.getElementById("closeModal");
const profileName = document.getElementById("profileName");
const profileLocation = document.getElementById("profileLocation");
const profilePrice = document.getElementById("profilePrice");
const profileDistance = document.getElementById("profileDistance");
const profileRating = document.getElementById("profileRating");
const bookServiceBtn = document.getElementById("bookService");

// Function to render service cards
const renderServices = () => {
    serviceContainer.innerHTML = "";
    filteredPlumbers.forEach(plumber => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${plumber.name}</h3>
            <p>Location: ${plumber.location}</p>
            <p class="price">Price: $${plumber.price}</p>
            <p class="distance">Distance: ${plumber.distance} km</p>
            <p>Rating: ${plumber.rating} / 5</p>
        `;
        card.addEventListener("click", () => openModal(plumber));
        serviceContainer.appendChild(card);
    });
};

// Function to open the modal with plumber details
const openModal = (plumber) => {
    profileName.textContent = plumber.name;
    profileLocation.textContent = plumber.location;
    profilePrice.textContent = plumber.price;
    profileDistance.textContent = plumber.distance;
    profileRating.textContent = plumber.rating;
    modal.style.display = "flex";
};

// Function to close the modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Book service action (example)
bookServiceBtn.addEventListener("click", () => {
    alert(`You have booked ${profileName.textContent}'s service!`);
    modal.style.display = "none";
});

// Filters logic
const applyFilters = () => {
    const maxPrice = parseInt(priceFilter.value);
    const maxDistance = parseInt(distanceFilter.value);

    priceValue.textContent = `$${maxPrice}`;
    distanceValue.textContent = `${maxDistance} km`;

    filteredPlumbers = plumberData.filter(plumber =>
        plumber.price <= maxPrice && plumber.distance <= maxDistance
    );

    renderServices();
};

// Event listeners for filters
priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);

// Initial render
applyFilters();
