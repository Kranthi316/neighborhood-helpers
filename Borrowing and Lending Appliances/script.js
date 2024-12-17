// script.js
const appliancesData = [
    {
        id: 1,
        name: "Vacuum Cleaner",
        owner: "John Doe",
        price: 15,
        distance: 5,
        rating: 4.5,
        details: "High-powered vacuum cleaner for all surfaces."
    },
    {
        id: 2,
        name: "Blender",
        owner: "Jane Smith",
        price: 10,
        distance: 3,
        rating: 4.8,
        details: "Perfect for smoothies and kitchen prep."
    },
    {
        id: 3,
        name: "Washing Machine",
        owner: "Mark Johnson",
        price: 25,
        distance: 10,
        rating: 4.2,
        details: "Efficient washing machine available for daily rentals."
    },
    {
        id: 4,
        name: "Air Conditioner",
        owner: "Alice Davis",
        price: 30,
        distance: 15,
        rating: 4.0,
        details: "Portable AC, great for small rooms."
    }
];

let filteredAppliances = [...appliancesData];

const appliancesContainer = document.getElementById("appliances");
const priceFilter = document.getElementById("price");
const distanceFilter = document.getElementById("distance");
const ratingFilter = document.getElementById("rating");
const priceValue = document.getElementById("priceValue");
const distanceValue = document.getElementById("distanceValue");
const ratingValue = document.getElementById("ratingValue");

const applianceDetailsModal = document.getElementById("applianceDetails");
const applianceName = document.getElementById("applianceName");
const applianceOwner = document.getElementById("applianceOwner");
const appliancePrice = document.getElementById("appliancePrice");
const applianceDistance = document.getElementById("applianceDistance");
const applianceRating = document.getElementById("applianceRating");
const applianceDetailsText = document.getElementById("applianceDetailsText");
const closeModal = document.getElementById("closeModal");
const borrowNowBtn = document.getElementById("borrowNow");

const renderAppliances = () => {
    appliancesContainer.innerHTML = "";
    filteredAppliances.forEach(appliance => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${appliance.name}</h3>
            <p>Owner: ${appliance.owner}</p>
            <p class="price">Price: $${appliance.price}/day</p>
            <p class="distance">Distance: ${appliance.distance} km</p>
            <p>Rating: ${appliance.rating} / 5</p>
        `;
        card.addEventListener("click", () => openApplianceDetails(appliance));
        appliancesContainer.appendChild(card);
    });
};

const openApplianceDetails = (appliance) => {
    applianceName.textContent = appliance.name;
    applianceOwner.textContent = appliance.owner;
    appliancePrice.textContent = appliance.price;
    applianceDistance.textContent = appliance.distance;
    applianceRating.textContent = appliance.rating;
    applianceDetailsText.textContent = appliance.details;

    applianceDetailsModal.style.display = "flex";
};

closeModal.addEventListener("click", () => {
    applianceDetailsModal.style.display = "none";
});

borrowNowBtn.addEventListener("click", () => {
    alert(`You have requested to borrow: ${applianceName.textContent}`);
    applianceDetailsModal.style.display = "none";
});

const applyFilters = () => {
    const maxPrice = parseInt(priceFilter.value);
    const maxDistance = parseInt(distanceFilter.value);
    const minRating = parseFloat(ratingFilter.value);

    priceValue.textContent = `$${maxPrice}`;
    distanceValue.textContent = `${maxDistance} km`;
    ratingValue.textContent = `${minRating}`;

    filteredAppliances = appliancesData.filter(appliance =>
        appliance.price <= maxPrice &&
        appliance.distance <= maxDistance &&
        appliance.rating >= minRating
    );
    renderAppliances();
};

priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);
ratingFilter.addEventListener("input", applyFilters);

applyFilters();
