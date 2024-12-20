// Selectors
const vehiclesTableBody = document.getElementById("vehiclesTable").querySelector("tbody");
const addVehicleBtn = document.getElementById("addVehicleBtn");

// Fetch vehicles from JSON file
async function fetchVehicles() {
    try {
        const response = await fetch("data/vehicles.json");
        if (!response.ok) throw new Error("Failed to load vehicle data.");
        const vehicles = await response.json();
        displayVehicles(vehicles);
    } catch (error) {
        console.error("Error fetching vehicle data:", error);
    }
}

// Render vehicles in the table
function displayVehicles(vehicles) {
    vehiclesTableBody.innerHTML = ""; // Clear the table
    vehicles.forEach(vehicle => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${vehicle.id}</td>
            <td>${vehicle.type}</td>
            <td>${vehicle.availability}</td>
            <td>${vehicle.price}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editVehicle(${vehicle.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteVehicle(${vehicle.id})">Delete</button>
            </td>
        `;
        vehiclesTableBody.appendChild(row);
    });
}

// Event: Add new vehicle (opens form)
addVehicleBtn.addEventListener("click", () => {
    alert("Feature to add a vehicle is under development!");
});

// Initialize the page
fetchVehicles();
