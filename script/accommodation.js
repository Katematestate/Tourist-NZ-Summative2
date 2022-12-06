const accommodation_database = [
  {
    name: "The Dwellington",
    type: "Hostel",
    rating: 9.1,
    price: 30,
    location: "Wellington, NZ",
    guests: [1],
    nights: [1, 10],
    imageRoot: "the-dwellington",
    images: [
      "the-dwellington-front.jpg",
      "the-dwellington-cinema.jpg",
      "the-dwellington-dining-room.jpg",
      "the-dwellington-kitchen.jpg",
      "the-dwellington-laundry.jpg",
      "the-dwellington-lounge.jpg",
      "the-dwellington-outside.jpg",
      "the-dwellington-porch.jpg",
      "the-dwellington-room.jpg",
    ],
    info: [
      "Offering a tennis court, The Dwellington is less than 5 minutes’ drive from the Bluebridge Ferry Terminal and 10 minutes’ drive from the Interislander Ferry Terminal. Guests can enjoy free ferry drop offs in the morning and free WiFi in public areas.",
      "The Dwellington is a 10 minute walk from Wellington Train and Bus Station and a variety of restaurants, cafes and shops. It’s a 15 minute walk from the Westpac Stadium and Lambton Quay. There is access to a shared kitchen and a dining area. The bathroom facilities are shared and include a shower and a toilet. There is also a mini-cinema with a 4K projector.",
    ],
    amenities: [
      { name: "Free Wifi", icon: "wifi-icon.svg" },
      { name: "Family Rooms", icon: "family-icon.svg" },
      { name: "Non-smoking Rooms", icon: "no-smoking-icon.svg" },
    ],
    foodOptions: {
      image: "the-dwellington-kitchen.jpg",
      drinks: {
        note: "Free & All Day",
        options: ["Coffee (variety of milks)", "Tea", "Hot Chocolate"],
      },
      breakfast: {
        note: "Free",
        options: [
          "Continental",
          "Cereal (3 choices)",
          "Bread (peanut butter and jams)",
          "Eggs (myriad of herbs, spices and oils)",
          "Fruit (banana, kiwi and oranges)",
        ],
      },
      additionalInfo: ["Open kitchen for cooking your own food."],
    },
  },
  {
    name: "Novotel",
    subName: "Queenstown Lakeside",
    type: "Hotel",
    rating: 8.1,
    price: 157,
    location: "Queenstown, NZ",
    guests: [1, 2],
    nights: [1, 5],
    imageRoot: "novotel-queenstown-lakeside",
    images: [
      "novotel-front.jpg",
      "novotel-balcony.jpg",
      "novotel-buffet.jpg",
      "novotel-eatery.jpg",
      "novotel-entrance-view.jpg",
      "novotel-gym.jpg",
      "novotel-restaurant.jpg",
      "novotel-room.jpg",
      "novotel-view.jpg",
    ],
    info: [
      "Nestled on the shores of Lake Wakatipu, Novotel Queenstown Lakeside is just a 1-minute walk from many shops, restaurants, nightlife and activities. Novotel Queenstowns’ contemporary rooms offer a selection of spectacular alpine, garden and lake views. Each air-conditioned room features a private balcony and a flat-screen TV. Novotel offers ski storage facilities, a spa pool, guest laundry and valet car parking. Guests can enjoy 30-minutes free WiFi in the lobby. In-room WiFi is available at an additional charge.",
      "24-hour room service is available. There is a concierge service which can organize transfers to the local ski fields, including Coronet Peak, The Remarkables and Cardrona.",
    ],
    amenities: [
      { name: "Free Wifi", icon: "wifi-icon.svg" },
      { name: "Family Rooms", icon: "family-icon.svg" },
      { name: "Non-smoking Rooms", icon: "no-smoking-icon.svg" },
      { name: "Fitness Centre", icon: "fitness-icon.svg" },
    ],
    foodOptions: {
      image: "novotel-buffet.jpg",
      drinks: {
        note: "Available in all rooms",
        options: ["Coffee", "Tea"],
      },
      breakfast: {
        note: "Restaurant & Bar",
        options: ["Buffet"],
      },
      additionalInfo: [
        "Elements Restaurant boasts local cuisine and ingredients, including the hotel’s very own rooftop honey. It also serves daily buffet breakfast with hot and continental options. Enjoy tapas and beverages in front of the fireplace at Elements Cafe & Bar.",
      ],
    },
  },
  {
    name: "Futuna Rocks",
    subName: "Motel",
    type: "Motel",
    rating: 9.1,
    price: 90,
    location: "Kaikoura, NZ",
    guests: [2, 4],
    nights: [3, 10],
    imageRoot: "futuna-rocks-motel",
    images: [
      "futuna-rocks-front.jpg",
      "futuna-rocks-bathroom.jpg",
      "futuna-rocks-kitchen.jpg",
      "futuna-rocks-outside.jpg",
      "futuna-rocks-room.jpg",
      "futuna-rocks-room2.jpg",
      "futuna-rocks-view.jpg",
    ],
    info: [
      "Situated in Kaikoura, within a few steps of Kaikoura Beach and 1.7 km of Waioruarangi, Futuna Rocks Motel features accommodation with a garden and free WiFi throughout the property as well as free private parking for guests who drive. The property offers garden views and a barbecue.",
      "All rooms at the motel are fitted with a seating area and a flat-screen TV. The rooms are fitted with a kettle and a private bathroom with a shower and free toiletries, while some rooms also boast a kitchenette fitted with a stovetop. At Futuna Rocks Motel each room is fitted with bed linen and towels.",
      "Goose Bay is 18 km from the accommodation, while Oaro is 23 km from the property. The nearest airport is Kaikoura Airport, 8 km from the Futuna Rocks Motel.",
    ],
    amenities: [
      { name: "Free Wifi", icon: "wifi-icon.svg" },
      { name: "Free Parking", icon: "parking-icon.svg" },
      { name: "Non-smoking Rooms", icon: "no-smoking-icon.svg" },
    ],
    foodOptions: {
      image: "futuna-rocks-kitchen.jpg",
      drinks: {
        note: "",
        options: ["Kettle provided"],
      },
      breakfast: {
        note: "",
        options: [
          "Fridge provided (bring food)",
          "Stove-top (cooking your own food)",
        ],
      },
      additionalInfo: ["There are restaurants and cafes nearby."],
    },
  },
  {
    name: "Dream Inn",
    subName: "",
    type: "House",
    rating: 9.4,
    price: 240,
    location: "Auckland, NZ",
    guests: [1, 4],
    nights: [2, 15],
    imageRoot: "dream-inn",
    images: [
      "dream-inn-front.jpg",
      "dream-inn-bathroom.jpg",
      "dream-inn-kitchen.jpg",
      "dream-inn-bedroom.jpg",
      "dream-inn-hot-tub.jpg",
      "dream-inn-room2.jpg",
      "dream-inn-view.jpg",
      "dream-inn-lounge.jpg",
      "dream-inn-laundry.jpg",
    ],
    info: [
      "Dream Inn, a property with a garden and a terrace, is situated in Auckland, 16 km from Auckland Harbour Bridge, 19 km from North Head Historic Reserve, as well as 19 km from Sky Tower. The air-conditioned accommodation is 700 m from Browns Bay Beach, and guests benefit from private parking available on site and free WiFi.",
      "The villa features 3 bedrooms, 2 bathrooms, bed linen, towels, a flat-screen TV, a dining area, a fully equipped kitchen and a patio with garden views.",
      "At the villa guests are welcome to take advantage of a hot tub. Viaduct Harbour is 19 km from Dream Inn, while Aotea Centre is 19 km from the property. The nearest airport is Auckland Airport, 39 km from the accommodation.",
    ],
    amenities: [
      { name: "Free Wifi", icon: "wifi-icon.svg" },
      { name: "Free Parking", icon: "parking-icon.svg" },
      { name: "Non-smoking Rooms", icon: "no-smoking-icon.svg" },
      { name: "Hot Tub/Jacuzzi", icon: "hot-tub-icon.svg" },
    ],
    foodOptions: {
      image: "dream-inn-kitchen.jpg",
      drinks: {
        note: "",
        options: ["Kettle provided (bring your own drinks)"],
      },
      breakfast: {
        note: "",
        options: ["Fully equipped kitchen (bring food to cook)"],
      },
      additionalInfo: ["There are restaurants and cafes nearby."],
    },
  },
];

const query = new URLSearchParams(window.location.search);
const guests = +query.get("guests") ?? 1;
const stay = query.get("stay") ? query.get("stay").split(" - ") : ["", ""];
const stay_days = getDays(new Date(stay[0]), new Date(stay[1]));
//prefix $ shows that you can interact with jquery
const $guests = $('input[name="guests"]');
const $stay = $('input[name="stay"]');

$guests.val(query.get("guests") || "1");

const $dwellings_container = $("#dwellings-container");

$("#accommodation-date-picker").daterangepicker({
  startDate: query.get("stay")?.split(" - ")[0],
  endDate: query.get("stay")?.split(" - ")[1],
  minDate: moment(),
  maxSpan: { days: 15 },
  autoApply: true,
});

/**
 * Counts the number of days between two dates
 * @param {Date} start
 * @param {Date} end
 * @returns {number}
 */
function getDays(start, end) {
  let days = 0;
  let current = start;
  while (current <= end) {
    days++;
    //Here is where you see why dates are annoying
    current = new Date(current.setDate(current.getDate() + 1));
  }
  return days;
}

function isInRange(value, lower, upper) {
  return value >= lower && value <= upper;
}

const cards = accommodation_database.filter((dwelling) => {
  let guestRange = [];
  if (dwelling.guests[1]) {
    guestRange = [dwelling.guests[0], dwelling.guests[1]];
  } else {
    guestRange = [dwelling.guests[0], dwelling.guests[0]];
  }

  if (
    isInRange(guests, guestRange[0], guestRange[1]) &&
    isInRange(stay_days, dwelling.nights[0], dwelling.nights[1])
  ) {
    return dwelling;
  }
});

for (const dwelling of cards) {
  const $card = $(`<div class="accommodation-card"></div>`);
  const $photoReel = $(`<div class="photo-reel" data-current-image="0"></div>`);
  $card.append($photoReel);
  for (let i = 0; i < dwelling.images.length; i++) {
    const image = dwelling.images[i];
    $photoReel.append(
      $(
        `<img ${i === 0 ? 'class="selected"' : ""} src="./resources/images/${
          dwelling.imageRoot
        }/${image}" />`
      )
    );
  }
  const $carousel_toolbar = $(`<div class="carousel-toolbar"></div>`);
  $photoReel.append($carousel_toolbar);
  $carousel_toolbar.append($(`<button class="left">&lt;</button>`));
  const $carousel_chips = $(`<div class="carousel-chips"></div>`);
  $carousel_toolbar.append($carousel_chips);
  for (let i = 0; i < dwelling.images.length; i++) {
    $carousel_chips.append(
      $(`
        <span class="carousel-chip ${i === 0 ? "selected" : ""}"></span>
      `)
    );
  }
  $carousel_toolbar.append($(`<button class="right">&gt;</button>`));

  $card.append(
    $(`
    <div class="accommodation-type">
      <span>${dwelling.type}</span>
      <span class="rating">
        <img class="star"
          src="./resources/svgs/star-icon.svg"
        />${dwelling.rating}</span>
    </div>
    `)
  );
  $card.append(
    $(`
    <div class="info-title">
      <h2>${dwelling.name}</h2>
      ${dwelling.subName ? `<h3>${dwelling.subName}</h3>` : ""}
      <p class="per-night"><span class="price">$${
        dwelling.price
      }</span>/ night</p>
    </div>
    `)
  );
  $card.append(
    $(`
    <div class="info-three-icons">
      <div class="location">
        <img src="./resources/svgs/location-icon.svg" alt="" />
        <span>${dwelling.location}</span>
      </div>
      <div class="guests">
        <img src="./resources/svgs/people-icon.svg" alt="" />
        <span>${dwelling.guests.join("-")} Adult${
      dwelling.guests[0] > 1 || dwelling.guests.length > 1 ? "s" : ""
    }</span>
      </div>
      <div class="nights">
        <img src="./resources/svgs/night-icon.svg" alt="" />
        <span>${dwelling.nights.join("-")} nights</span>
      </div>
    </div>
    `)
  );

  for (const info of dwelling.info) {
    $card.append($(`<p>${info}</p>`));
  }
  const $amenity_icons = $(`<div class="amenity-icons"></div>`);
  $card.append($amenity_icons);

  for (const amenity of dwelling.amenities) {
    $amenity_icons.append(
      $(`
        <div class="amenity-icon">
          <img src="./resources/svgs/${amenity.icon}" />
          <span>${amenity.name}</span>
        </div>
      `)
    );
  }

  const food_options_id =
    dwelling.name.toLowerCase().replace(/\s/g, "-") + "-options";
  const $food_options = $(`
    <div class="food-modal" id="${food_options_id}" style="opacity: 0">
      <div class="kitchen">
        <h2>Food Options</h2>
        <img
          src="./resources/images/${dwelling.imageRoot}/${dwelling.foodOptions.image}"
        />
      </div>
      <button class="exit" data-toggles="${food_options_id}">X</button>
    </div>
  `);
  $card.append($food_options);
  $food_options.append(
    $(`
      <div class="food-options">
        <span>Drink Options: ${
          dwelling.foodOptions.drinks.note
            ? `(${dwelling.foodOptions.drinks.note})`
            : ""
        }</span>
        <ul>
          ${dwelling.foodOptions.drinks.options
            .map((o) => `<li>${o}</li>`)
            .join("")}
        </ul>
        <span>Breakfast Choices: ${
          dwelling.foodOptions.breakfast.note
            ? `(${dwelling.foodOptions.breakfast.note})`
            : ""
        }</span>
        <ul>
          ${dwelling.foodOptions.breakfast.options
            .map((o) => `<li>${o}</li>`)
            .join("")}
        </ul>
        ${dwelling.foodOptions.additionalInfo
          .map((o) => `<p>${o}</p>`)
          .join("")}
      </div>
    `)
  );

  $card.append(
    $(`
      <div class="actions">
        <button class="secondary" data-toggles="${food_options_id}">
          Food Options
        </button>
        <button>Book</button>
      </div>
    `)
  );

  $dwellings_container.append($card);
}

const carouselButtonsLeft = document.querySelectorAll(
  ".carousel-toolbar button.left"
);
const carouselButtonsRight = document.querySelectorAll(
  ".carousel-toolbar button.right"
);

const carousels = document.querySelectorAll(".photo-reel");

// go back through images when the left button is clicked
carouselButtonsLeft.forEach((button) => {
  button.addEventListener("click", (event) => {
    const container = event.target.parentElement.parentElement;
    let currentImageIndex = +container.getAttribute("data-current-image");
    const images = container.querySelectorAll("img");
    const chips = container.querySelectorAll(".carousel-chip");

    // Bounds check the current index, if we are at the start of the array
    // we cant go back any further so we need to loop around to the last image
    // in the array instead
    if (currentImageIndex === 0) {
      // set current index to the length of the array minus one (indexes are 0 based)
      currentImageIndex = images.length - 1;
    } else {
      // go back one image
      currentImageIndex--;
    }

    // Reset the selected class for each image and chip before we add the updated one
    Array.from(images).forEach((image) => image.classList.remove("selected"));
    Array.from(chips).forEach((chip) => chip.classList.remove("selected"));

    // Add the selected class to the current image and chip
    images[currentImageIndex].classList.add("selected");
    chips[currentImageIndex].classList.add("selected");

    // Store our current image index for the next time a button is clicked
    container.setAttribute("data-current-image", currentImageIndex);
  });
});

// same as above but flipped to go forward through images instead of back
carouselButtonsRight.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event);
    const container = event.target.parentElement.parentElement;
    let currentImageIndex = +container.getAttribute("data-current-image");
    const images = container.querySelectorAll("img");
    const chips = container.querySelectorAll(".carousel-chip");

    if (currentImageIndex === images.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }

    Array.from(images).forEach((image) => image.classList.remove("selected"));
    Array.from(chips).forEach((chip) => chip.classList.remove("selected"));
    images[currentImageIndex].classList.add("selected");
    chips[currentImageIndex].classList.add("selected");
    container.setAttribute("data-current-image", currentImageIndex);
  });
});

// FOOD OPTION FUNCTION

const food_option_buttons = document.querySelectorAll("button[data-toggles]");

food_option_buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const element = event.target;
    const target = element.getAttribute("data-toggles");
    const c = document.getElementById(target);
    if (c.style.opacity === "0") {
      c.style.opacity = "1";
    } else {
      c.style.opacity = "0";
    }
  });
});
