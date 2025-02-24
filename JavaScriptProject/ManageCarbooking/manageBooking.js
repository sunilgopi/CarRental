document.addEventListener("DOMContentLoaded", () => {
  const bookingsContainer = document.getElementById("bookings-container");

  // Fetch single booking object from localStorage
  const booking = JSON.parse(localStorage.getItem("Confirmed_Bookings"));


  //getting Active user Data
  const activeData = JSON.parse(localStorage.getItem("activeUser"))
  // If no booking is found
  if (!booking) {
    bookingsContainer.innerHTML = `<p class="no-bookings">No bookings available.</p>`;
    return;
  }

  // Create a single card for the booking
  const bookingCard = document.createElement("div");
  bookingCard.className = "card";  
  bookingCard.innerHTML = `
    <img src="${booking.image}" alt="${booking.carName}">
    <div class="card-details">
      <h2>${booking.carName}</h2>
      <p><strong>User:</strong> ${activeData.username}</p>
      <p><strong>Email:</strong> ${activeData.email}</p>
      <p><strong>Rental Period:</strong> ${booking.startDate} to ${booking.endDate}</p>
      <p><strong>Total Price:</strong> $${booking.totalPrice}</p>
      <button onclick="printReceipt()" class="print-btn">PrintReceipt</button>
    </div>
  `;

  // Append the booking card to the container
  bookingsContainer.appendChild(bookingCard);
});

// Print Receipt Function
function printReceipt() {
  const booking = JSON.parse(localStorage.getItem("Confirmed_Bookings"));
  const activeData = JSON.parse(localStorage.getItem("activeUser"))
  console.log(activeData)

  if (!booking) {
    alert("No booking data found!");
    return;
  }

  const receiptWindow = window.open("", "_blank");
  receiptWindow.document.write(`
    <html>
      <head>
        <title>Booking Receipt</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 2rem; text-align: center; }
          h1 { color: #007bff; }
          .receipt { border: 1px solid #ddd; padding: 1rem; max-width: 400px; margin: 0 auto; }
          img { width: 100%; border-radius: 8px; margin-bottom: 1rem; }
          p { margin: 0.5rem 0; }
        </style>
      </head>
      <body>
        <h1>Booking Receipt</h1>
        <div class="receipt">
          <img src="${booking.image}" alt="${booking.carName}">
          <h2>${booking.carName}</h2>
          <p><strong>User:</strong> ${activeData.username}</p>
          <p><strong>Email:</strong> ${activeData.email}</p>
          <p><strong>Rental Period:</strong> ${booking.startDate} to ${booking.endDate}</p>
          <p><strong>Total Price:</strong> $${booking.totalPrice}</p>
          <p>Thank you for choosing our service!</p>
        </div>
        <script>
          window.print();
        </script>
      </body>
    </html>
  `);
  receiptWindow.document.close();
}
