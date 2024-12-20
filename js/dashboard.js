// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard.js: DOM fully loaded.");
  
    // 1. Populate Booking History Table
    const bookingHistoryTable = document.getElementById("booking-history");
  
    if (bookingHistoryTable) {
      const bookings = [
        { id: "QL001", origin: "New York", destination: "Los Angeles", status: "In Transit" },
        { id: "QL002", origin: "Chicago", destination: "Houston", status: "Delivered" },
        { id: "QL003", origin: "Miami", destination: "Seattle", status: "Pending" },
      ];
  
      bookings.forEach((booking) => {
        const row = `
          <tr>
            <td>${booking.id}</td>
            <td>${booking.origin}</td>
            <td>${booking.destination}</td>
            <td>${booking.status}</td>
            <td>
              <button class="btn btn-sm btn-primary details-btn" data-id="${booking.id}">Details</button>
            </td>
          </tr>
        `;
        bookingHistoryTable.innerHTML += row;
      });
  
      // Add event listeners for "Details" buttons
      document.querySelectorAll(".details-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
          const bookingId = e.target.dataset.id;
          alert(`Showing details for booking ID: ${bookingId}`);
        });
      });
    } else {
      console.error("Booking history table not found.");
    }
  
    // 2. Handle Shipment Tracking
    const trackingForm = document.getElementById("tracking-form");
    const trackingResult = document.getElementById("tracking-result");
  
    if (trackingForm && trackingResult) {
      trackingForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const trackingID = document.getElementById("tracking-id").value;
  
        if (trackingID) {
          // Simulate tracking data
          const trackingData = [
            { id: "QL001", status: "In Transit" },
            { id: "QL002", status: "Delivered" },
            { id: "QL003", status: "Pending" },
          ];
  
          const result = trackingData.find((entry) => entry.id === trackingID);
  
          if (result) {
            trackingResult.innerHTML = `
              <p class="text-success">
                Shipment ID: <strong>${result.id}</strong> is <strong>${result.status}</strong>.
              </p>
            `;
          } else {
            trackingResult.innerHTML = `
              <p class="text-danger">Tracking ID not found.</p>
            `;
          }
        } else {
          trackingResult.innerHTML = `
            <p class="text-danger">Please enter a valid Tracking ID.</p>
          `;
        }
      });
    } else {
      console.error("Tracking form or result container not found.");
    }
  });
  