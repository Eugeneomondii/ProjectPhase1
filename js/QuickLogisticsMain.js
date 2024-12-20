const servicesContainer = document.getElementById("servicesContainer");
const serviceSelection = document.getElementById("serviceSelection");
const bookingForm = document.getElementById("bookingForm");

const vehiclesContainer = document.getElementById("vehiclesContainer");

async function loadVehicles() {
    const response = await fetch("data/vehicles.json");
    return response.json();
}



async function loadServices() {
    const response = await fetch("data/services.json");
    const services = await response.json();

    services.forEach(service => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${service.name}</h5>
                    <p class="card-text">${service.description}</p>
                </div>
            </div>
        `;
        servicesContainer.appendChild(card);

        if (serviceSelection) {
            const option = document.createElement("option");
            option.value = service.id;
            option.textContent = service.name;
            serviceSelection.appendChild(option);
        }
    });
}

if (servicesContainer) {
    loadServices();
}

if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const customerName = document.getElementById("customerName").value;
        const selectedServiceId = parseInt(serviceSelection.value);

        loadServices().then(services => {
            const selectedService = services.find(service => service.id === selectedServiceId);

            if (customerName && selectedService) {
                alert(`Booking confirmed for ${customerName} with service: ${selectedService.name}`);
            } else {
                alert("Please complete all fields.");
            }
        });
    });
}
