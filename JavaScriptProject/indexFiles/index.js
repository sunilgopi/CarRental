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
  },
  {
    name: "Hyundai Elantra",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1-litre / 3.2 km",
    image: "../assets/images/section2-img2.png",
  },
  {
    name: "Kia Rio",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    age: "21+ Years",
    fuel: "1-litre / 3.5 km",
    image: "../assets/images/section2-img3.png",
  },
  {
    name: "Toyota Yaris",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    age: "22+ Years",
    fuel: "1-litre / 3.1 km",
    image: "../assets/images/section2-img4.png",
  },
  {
    name: "Nissan Versa",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    age: "21+ Years",
    fuel: "1-litre / 3 km",
    image: "../assets/images/section2-img5.png",
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
  },
  {
    name: "Volkswagen Golf",
    category: "Compact",
    seats: 5,
    transmission: "Manual",
    age: "21+ Years",
    fuel: "1-litre / 4 km",
    image: "../assets/images/section2-img7.png",
  },
  {
    name: "Mazda 3",
    category: "Compact",
    seats: 5,
    transmission: "Manual",
    age: "22+ Years",
    fuel: "1-litre / 3.8 km",
    image: "../assets/images/section2_img8.png",
  },
  {
    name: "Toyota Corolla",
    category: "Compact",
    seats: 5,
    transmission: "Automatic",
    age: "23+ Years",
    fuel: "1-litre / 3.2 km",
    image: "../assets/images/section2-img2.png",
  },
  {
    name: "Chevrolet Cruze",
    category: "Compact",
    seats: 5,
    transmission: "Automatic",
    age: "22+ Years",
    fuel: "1-litre / 3 km",
    image: "../assets/images/section2-img3.png",
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
  },
  {
    name: "BMW 5 Series",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.5 km",
    image: "../assets/images/section2-img7.png",
  },
  {
    name: "Mercedes-Benz C-Class",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.1 km",
    image: "../assets/images/section2-img5.png",
  },
  {
    name: "Audi A4",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.3 km",
    image: "../assets/images/section2-img1.png",
  },
  {
    name: "Lexus ES",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    age: "25+ Years",
    fuel: "1-litre / 2.4 km",
    image: "../assets/images/section2-img2.png",
  },
];

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
        </div>
      </div>`;
    Card.append(newCard);
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
        </div>
      </div>`;
    Card.append(newCard);
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
          </div>
        </div>`;
      Card.append(newCard);
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
Card.addEventListener("click", () => {
  Swal.fire({
    title: "Please Login!",
    text: "You need to login to Rent this Car.",
    imageUrl: "https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg", // Add a smiley image URL
    imageWidth: 100,
    imageHeight: 100,
    confirmButtonText: "Ok",
  });
});
Card.addEventListener("click", () => {
  Swal.fire({
    title: "Please Login!",
    text: "You need to login to Rennt this car.",
    imageUrl: "https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg", // Add a smiley image URL
    imageWidth: 100,
    imageHeight: 100,
    confirmButtonText: "Ok",
  });
});

