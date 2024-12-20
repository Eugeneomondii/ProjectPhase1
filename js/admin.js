document.addEventListener("DOMContentLoaded", async () => {
    const bookingsTable = document.getElementById("bookingsTable");
    const requestsTable= document.getElementById("requestsTable")
    const serviceForm = document.getElementById("serviceForm");
    const servicesTable = document.getElementById("servicesTable");
    const reportContainer = document.getElementById("reportContainer");
    const generateReport = document.getElementById("generateReport");

    async function loadBookings() {
        const response = await fetch("data/bookings.json");
        return response.json();
    }
    async function loadData(url) {
        try{
            const response=await fetch(url);
            if (!response.ok) throw new Error("Failed to load data.");
            return await
            response.json();
        } catch (error) {
            console.error("Error loading data:", error);
            return[];
        }
        
    }
    async function renderBookings() {
        const bookings = await fetch("data/bookings.json");

        if (bookingsTable) {
            bookingsTable.querySelector("tbody")
            tbody.innerHTML = "";
            bookings.forEach(booking =>
            {
                const row= document.createElement("tr");
                row.innerHTML=`
                <td>${booking.id}</td>
                <td>${booking.origin}</td>
                <td>${booking.destination}</td>
                <td>${booking.status}</td>
                <button class="btn btn-warning btn-sm">Update</button>
                </td>`;
                tbody.appendChild(row);
            });
        }
    }
    async function renderRequests() {
        const requests = await fetch("data/requests.json")
        if(requestsTable) {
            const tbody=requestsTable.querySelector("tbody");
            tbody.innerHTML="";
        
    
        requests.forEach(request => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${request.id}</td>
                <td>${request.customer}</td>
                <td>${request.service}</td>
                <td>${request.status}</td>
                <td>
                    <button class="btn btn-sm btn-success">Accept</button>
                    <button class="btn btn-sm btn-danger">Decline</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
}
    renderRequests();
    

    if (generateReport) {
        generateReport.addEventListener("click", async () => {
            const bookings = await loadBookings();
            reportContainer.innerHTML = `
                <h4>Report</h4>
                <p>Total Bookings: ${bookings.length}</p>
            `;
        });
    }

    renderBookings();
    async function calculateAnalytics() {
        const bookings = await loadBookings();
        const earnings = bookings.reduce((sum, booking) => sum + booking.price, 0);
    
        document.getElementById("totalEarnings").textContent = earnings;
        document.getElementById("totalDeliveries").textContent = bookings.length;
    }
    calculateAnalytics();
    const vehicleForm = document.getElementById("vehicleForm");
const vehiclesTable = document.getElementById("vehiclesTable");

async function renderVehiclesAdmin() {
    const vehicles = await loadVehicles();

    if (vehiclesTable) {
        vehiclesTable.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Capacity</th>
                    <th>Availability</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        const tbody = vehiclesTable.querySelector("tbody");
        vehicles.forEach(vehicle => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${vehicle.id}</td>
                <td>${vehicle.type}</td>
                <td>${vehicle.capacity}</td>
                <td>${vehicle.availability}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

if (vehicleForm) {
    vehicleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const vehicleType = document.getElementById("vehicleType").value;
        const vehicleCapacity = document.getElementById("vehicleCapacity").value;

        alert(`New vehicle added: ${vehicleType} with capacity ${vehicleCapacity}`);
        // Additional logic to update vehicles.json or backend API
    });
}

renderVehiclesAdmin();

    
});
