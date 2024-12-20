// Selectors
const searchForm = document.getElementById("searchForm");
const providersTableBody = document.getElementById("providersTable").querySelector("tbody");

// Sample logistics providers data
const providers = [
    { id: 1, name: "Speedy Movers", location: "Nairobi", capacity: 10, contact: "0700000001" },
    { id: 2, name: "Global Freight", location: "Mombasa", capacity: 20, contact: "0700000002" },
    { id: 3, name: "Heavy Haulers", location: "Kisumu", capacity: 15, contact: "0700000003" },
    { id: 4, name: "Quick Transporters", location: "Nairobi", capacity: 5, contact: "0700000004" }
];

// Function to display search results
function displayProviders(filteredProviders) {
    providersTableBody.innerHTML = ""; // Clear previous results

    if (filteredProviders.length === 0) {
        providersTableBody.innerHTML = `<tr><td colspan="5">No providers match your search criteria.</td></tr>`;
        return;
    }

    filteredProviders.forEach(provider => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${provider.name}</td>
            <td>${provider.location}</td>
            <td>${provider.capacity} tons</td>
            <td>${provider.contact}</td>
            <td><button onclick="bookProvider(${provider.id})">Book</button></td>
        `;
        providersTableBody.appendChild(row);
    });
}

// Function to handle form submission
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = document.getElementById("location").value.toLowerCase();
    const capacity = parseInt(document.getElementById("capacity").value);

    const filteredProviders = providers.filter(provider =>
        provider.location.toLowerCase().includes(location) && provider.capacity >= capacity
    );

    displayProviders(filteredProviders);
});

// Function to handle booking (example functionality)
function bookProvider(providerId) {
    const provider = providers.find(p => p.id === providerId);
    alert(`You have selected ${provider.name} for your logistics needs.`);
}
