const carRentalData = [
  // Economy Category
  {
    name: "Ford Fiesta",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1-litre / 2.5 km",
    image: "../assets/images/section2-img1.png",
    price:20
  },
  {
    name: "Hyundai Elantra",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1-litre / 3.2 km",
    image: "../assets/images/section2-img2.png",
     price:25
  },
  {
    name: "Kia Rio",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    age: "21+ Years",
    fuel: "1-litre / 3.5 km",
    image: "../assets/images/section2-img3.png",
     price:35
  },
  {
    name: "Toyota Yaris",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    age: "22+ Years",
    fuel: "1-litre / 3.1 km",
    image: "../assets/images/section2-img4.png",
     price:22
  },
  {
    name: "Nissan Versa",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    age: "21+ Years",
    fuel: "1-litre / 3 km",
    image: "../assets/images/section2-img5.png",
     price:15
  },

  // Compact Category
  {
    name: "Honda Civic",
    category: "Compact",
    seats: 5,
    transmission: "Automatic",
    age: "22+ Years",
    fuel: "1-litre / 3.5 km",
    image: "../assets/images/section2-img6.png",
     price:20
  },
  {
    name: "Volkswagen Golf",
    category: "Compact",
    seats: 5,
    transmission: "Manual",
    age: "21+ Years",
    fuel: "1-litre / 4 km",
    image: "../assets/images/section2-img7.png",
     price:34
  },
  {
    name: "Mazda 3",
    category: "Compact",
    seats: 5,
    transmission: "Manual",
    age: "22+ Years",
    fuel: "1-litre / 3.8 km",
    image: "../assets/images/section2_img8.png",
     price:33
  },
  {
    name: "Toyota Corolla",
    category: "Compact",
    seats: 5,
    transmission: "Automatic",
    age: "23+ Years",
    fuel: "1-litre / 3.2 km",
    image: "../assets/images/section2-img2.png",
     price:10
  },
  {
    name: "Chevrolet Cruze",
    category: "Compact",
    seats: 5,
    transmission: "Automatic",
    age: "22+ Years",
    fuel: "1-litre / 3 km",
    image: "../assets/images/section2-img3.png",
     price:50
  },

  // Luxury Category
  {
    name: "Chevrolet Malibu",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2 km",
    image: "../assets/images/section2-img4.png",
     price:20
  },
  {
    name: "BMW 5 Series",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.5 km",
    image: "../assets/images/section2-img7.png",
     price:22
  },
  {
    name: "Mercedes-Benz C-Class",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.1 km",
    image: "../assets/images/section2-img5.png",
     price:25
  },
  {
    name: "Audi A4",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.3 km",
    image: "../assets/images/section2-img1.png",
     price:40
  },
  {
    name: "Lexus ES",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.4 km",
    image: "../assets/images/section2-img2.png",
    price:33
  },
];

// const isLoggedIn = JSON.parse(localStorage.getItem("loginSecurity"));

// if (isLoggedIn) {
//     // Redirect to the login page if not logged in
//     window.location.href = "../loginFiles/login.html";
// }

let Card = document.getElementById("cards");
let combact = document.getElementById("compact");
let Economy = document.getElementById("Economy");
let Luxzary = document.getElementById("Luxzary");
let userSearch = document.getElementById("searchCar");
let searchbtn = document.getElementById("searchButton")
if (Card) {
  // Initially render all cars
  carRentalData.forEach((i) => {
    let newCard = document.createElement("div");
    newCard.className = "col";
    newCard.innerHTML = `
      <div class="card shadow-sm border-light rounded newCard">
        <img src="${i.image}" class="card-img-top" alt="${i.name}">
        <div class="card-body">
          <h5 class="card-title">${i.name}</h5>
          <ul class="list-unstyled">
            <li><strong>Seats:</strong> ${i.seats}</li>
            <li><strong>Category:</strong> ${i.category}</li>
            <li><strong>Age:</strong> ${i.age}</li>
            <li><strong>Transmission:</strong> ${i.transmission}</li>
            <li><strong>Fuel:</strong> ${i.fuel}</li>
          </ul>
          <div class="prices">
            <p><strong>Price:</strong> $${i.price}</p>
            <button class="rent-btn">Rent</button>
          </div>
        </div>
      </div>`;

    Card.append(newCard);

    
     newCard.querySelector(".rent-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      
      localStorage.setItem("Card_Data", JSON.stringify(i));
      let adminCardData = JSON.parse(localStorage.getItem("AdminCardData")) || [];
      adminCardData.push(i);
      localStorage.setItem("AdminCardData", JSON.stringify(adminCardData));
  
      location.href="../carRentalFiles/Rent.html"
      
    });
  });
}


function renderCars(category) {
  Card.innerHTML = ""; // Clear existing cards
  const filteredCars = carRentalData.filter(car => car.category === category);
  filteredCars.forEach((i) => {
    let newCard = document.createElement("div");
    newCard.className = "col";
    newCard.innerHTML = `
      <div class="card shadow-sm border-light rounded newCard">
        <img src="${i.image}" class="card-img-top" alt="${i.name}">
        <div class="card-body">
          <h5 class="card-title">${i.name}</h5>
          <ul class="list-unstyled">
            <li><strong>Seats:</strong> ${i.seats}</li>
            <li><strong>Category:</strong> ${i.category}</li>
            <li><strong>Age:</strong> ${i.age}</li>
            <li><strong>Transmission:</strong> ${i.transmission}</li>
            <li><strong>Fuel:</strong> ${i.fuel}</li>
          </ul>
           <div class = "prices">
          <p><strong>Price:</strong> $${i.price}</p>
          <button id = "userClick">Rent</button>
          </div>
        </div>
      </div>`;
    Card.append(newCard);
    
    newCard.querySelector("#userClick").addEventListener("click", (e) => {
      e.stopPropagation();
      
      localStorage.setItem("Card_Data", JSON.stringify(i));
      let adminCardData = JSON.parse(localStorage.getItem("AdminCardData")) || [];
      adminCardData.push(i);
      localStorage.setItem("AdminCardData", JSON.stringify(adminCardData));
      location.href="../carRentalFiles/Rent.html"
      
    });


   


  });
}

// Event listeners for the buttons
combact.addEventListener("click", function() {
  renderCars("Compact");
});
Economy.addEventListener("click", function() {
  renderCars("Economy");
});
Luxzary.addEventListener("click", function() {
  renderCars("Luxury");
});

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const searchInput = userSearch.value.trim(); 
  Card.innerHTML = ""; 

  if (searchInput === "") {
    
    Card.innerHTML = "<h1>Please enter a car name to search.</h1>";
    return;
  }

  const searchResult = carRentalData.filter((car) =>
    car.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  if (searchResult.length > 0) {
    
    searchResult.forEach((i) => {
      let newCard = document.createElement("div");
      newCard.className = "col";
      newCard.innerHTML = `
        <div class="card shadow-sm border-light rounded newCard">
          <img src="${i.image}" class="card-img-top" alt="${i.name}">
          <div class="card-body">
            <h5 class="card-title">${i.name}</h5>
            <ul class="list-unstyled">
              <li><strong>Seats:</strong> ${i.seats}</li>
              <li><strong>Category:</strong> ${i.category}</li>
              <li><strong>Age:</strong> ${i.age}</li>
              <li><strong>Transmission:</strong> ${i.transmission}</li>
              <li><strong>Fuel:</strong> ${i.fuel}</li>
            </ul>
             <div class = "prices">
          <p><strong>Price:</strong> $${i.price}</p>
          <button id = "userClick" >Rent</button>
          </div>
          </div>
        </div>`;
      Card.append(newCard);
      localStorage.setItem("Card_Data", JSON.stringify(i));
      let adminCardData = JSON.parse(localStorage.getItem("AdminCardData")) || [];
      adminCardData.push(i);
      localStorage.setItem("AdminCardData", JSON.stringify(adminCardData));
      location.href="../carRentalFiles/Rent.html"
    });
  } else {
    
    Swal.fire({
      title: "Not Found!",
      text: "The car data you entered is not present.",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
});




const userIcon = document.getElementById("userIcon");
const popover = document.getElementById("popover");
const imageUpload = document.getElementById("imageUpload");
const logoutBtn = document.getElementById("logoutBtn");


userIcon.addEventListener("click", () => {
  if (popover.style.display === "block") {
    popover.style.display = "none";
  } else {
    popover.style.display = "block";
  }
});


document.addEventListener("click", (e) => {
  if (!e.target.closest("#userContainer")) {
    popover.style.display = "none";
  }
});

logoutBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure you want to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Logged Out!", "You have been logged out.", "success");
      localStorage.setItem("loginSecurity",JSON.stringify(false))
      // Perform logout operations or redirect
      window.location.href = "../loginFiles/login.html";
    }
  });
});

// Add a global event listener for all rent buttons
Card.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Rent") {
    const carName = e.target.id; // Button ID is set as car name
    const selectedCar = carRentalData.find((car) => car.name === carName);

    // Redirect to car-details page with the car details in query params
    if (selectedCar) {
      const carDataString = encodeURIComponent(JSON.stringify(selectedCar));
      window.location.href = `car-details.html?car=${carDataString}`;
    }
  }
});
