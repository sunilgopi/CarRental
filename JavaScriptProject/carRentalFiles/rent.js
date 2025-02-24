// Fetch display area
const displayCards = document.querySelector(".CardsDisplay");

let i = JSON.parse(localStorage.getItem("Card_Data"));
let j =JSON.parse(localStorage.getItem("activeUser"))

// Display Car Information
function displayCarCard() {
  displayCards.innerHTML = `
  
    <div class="card">
      <img src="${i.image}" alt="${i.name}">
      <h2>${i.name}</h2>
     <div class = "main">
      <ul>
        <li><strong>Seats:</strong> ${i.seats}</li>
        <li><strong>Category:</strong> ${i.category}</li>
        <li><strong>Age:</strong> ${i.age}</li>
        <li><strong>Transmission:</strong> ${i.transmission}</li>
        <li><strong>Fuel:</strong> ${i.fuel}</li>
        <p><strong>Price per day:</strong> $${i.price}</p>
      </ul>
      <div class="rent-section">
        
       <div class = "mainStart">
        <div class = "start">
        <label for="start-date">Start Date:</label>
        <input type="date" id="start-date" required>
        </div>
       <div class = "end">
        <label for="end-date">End Date:</label>
        <input type="date" id="end-date" required>
        </div>
       </div>
        <p><strong>Total Price:</strong> $<span id="total-price">${i.price}</span></p>
       <div class = "MainBtn">
        <button id="calculate-btn">Calculate Price</button>
        <button id="confirm-btn">Pay</button>
       </div>
       
        <div id="confirmation" class="confirm-section" style="display:none;"></div>
        <div class = "back"> <p>Go Back to user Page <a href = "../userFiles/user.html">click<a>
      </div>
     </div>
    </div>
  `;

  displayCards.querySelector("#calculate-btn").addEventListener("click", calculatePrice);
}

// Calculate Price Based on Dates
function calculatePrice() {
  const startDateInput = document.getElementById("start-date").value;
  const endDateInput = document.getElementById("end-date").value;

  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);

  // Input validation
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    alert("Please select valid start and end dates.");
    return;
  }

  if (startDate >= endDate) {
    alert("End date must be after the start date.");
    return;
  }

  const timeDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // Days

  if (typeof i === "undefined" || isNaN(i.price)) {
    alert("Car price data is missing or invalid.");
    return;
  }

  const totalPrice = timeDiff * i.price;

  document.getElementById("total-price").textContent = totalPrice;
  console.log("Total Price:", totalPrice);
}

// Confirm Booking and Store Data in localStorage
function confirmBooking() {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const totalPrice = document.getElementById("total-price").textContent;

  if (!startDate || !endDate) {
    alert("Please select dates first.");
    return;
  }

  // Prepare booking details object
  const bookingDetails = {
    Name :j.username,
    Email:j.email,
    carName: i.name,
    image: i.image,
    startDate: startDate,
    endDate: endDate,
    totalPrice: totalPrice,
  };

  // Store data in localStorage
  localStorage.setItem("Confirmed_Bookings", JSON.stringify(bookingDetails));
  AdminData = JSON.parse(localStorage.getItem("AdminCarBooking"))||[];
  AdminData.push(bookingDetails);
  localStorage.setItem("AdminCarBooking",JSON.stringify(AdminData))

  // Display confirmation message
  document.getElementById("confirmation").style.display = "block";
  document.getElementById("confirmation").innerHTML = `
    <h3>Booking Confirmed!</h3>
    <p><strong>Car:</strong> ${i.name}</p>
    <p><strong>Rental Period:</strong> ${startDate} to ${endDate}</p>
    <p><strong>Total Price:</strong> $${totalPrice}</p>
  `;

  console.log("Booking details saved to localStorage:", bookingDetails);
  location.href = "../paymentFolder/payment.html"
}

// Add Event Listeners for Buttons
function addEventListeners() {
  document.getElementById("confirm-btn").addEventListener("click", confirmBooking);
}

displayCarCard();
setTimeout(addEventListeners, 100);
