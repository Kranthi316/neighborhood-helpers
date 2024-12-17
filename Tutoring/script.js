// script.js
const tutorsData = [
    { id: 1, name: "John Doe", subject: "Math", location: "Downtown", price: 40, distance: 8, rating: 4.8 },
    { id: 2, name: "Jane Smith", subject: "Physics", location: "Suburbs", price: 30, distance: 12, rating: 4.6 },
    { id: 3, name: "Emily Davis", subject: "Chemistry", location: "City Center", price: 50, distance: 5, rating: 4.9 },
    { id: 4, name: "Michael Brown", subject: "Biology", location: "Near Park", price: 35, distance: 15, rating: 4.4 },
];

let filteredTutors = [...tutorsData];

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

const renderTutors = () => {
    providerContainer.innerHTML = "";
    filteredTutors.forEach(tutor => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${tutor.name}</h3>
            <p>Subject: ${tutor.subject}</p>
            <p class="price">Hourly Rate: $${tutor.price}</p>
            <p class="distance">Distance: ${tutor.distance} km</p>
            <p class="rating">Rating: ${tutor.rating} / 5</p>
        `;
        card.addEventListener("click", () => openTutorProfile(tutor));
        providerContainer.appendChild(card);
    });
};

const openTutorProfile = (tutor) => {
    providerName.textContent = tutor.name;
    providerLocation.textContent = `Location: ${tutor.location}`;
    providerPrice.textContent = tutor.price;
    providerDistance.textContent = tutor.distance;
    providerRating.textContent = tutor.rating;

    providerProfileModal.style.display = "flex";
};

closeProfileBtn.addEventListener("click", () => {
    providerProfileModal.style.display = "none";
});

bookServiceBtn.addEventListener("click", () => {
    alert(`Tutoring session booked with ${providerName.textContent}`);
    providerProfileModal.style.display = "none";
});

const applyFilters = () => {
    const maxPrice = parseInt(priceFilter.value);
    const maxDistance = parseInt(distanceFilter.value);

    priceValue.textContent = `$${maxPrice}`;
    distanceValue.textContent = `${maxDistance} km`;

    filteredTutors = tutorsData.filter(tutor => 
        tutor.price <= maxPrice && tutor.distance <= maxDistance
    );
    renderTutors();
};

priceFilter.addEventListener("input", applyFilters);
distanceFilter.addEventListener("input", applyFilters);

applyFilters();
