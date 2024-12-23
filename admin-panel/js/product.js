// API URL
let apiURL = "https://project06.onrender.com/meal";

// DOMContentLoaded eventida ma'lumotlarni yuklash
document.addEventListener("DOMContentLoaded", function () {
  fetchData();

  // Hodisa delegatsiyasi
  document.body.addEventListener("click", function (event) {
    const target = event.target;

    if (target.matches(".button-edit")) {
      const itemId = target.dataset.id;
      editItem(itemId);
    } else if (target.matches(".button-delete")) {
      const itemId = target.dataset.id;
      deleteItem(itemId);
    }
  });

  // Formani yuborish hodisasi
  const createForm = document.getElementById("create-form");
  if (createForm) {
    createForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const newItem = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        image: document.getElementById("image").value,
      };
      addNewItem(newItem);
    });
  }
});

// Ma'lumotlarni yuklash
function fetchData() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      displayItemsFromAPI(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// API dan kelgan ma'lumotlarni ko'rsatish uchun funksiyani moslashtirish
function displayItemsFromAPI(data) {
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = data
    .map(
      (item) => `
      <div style="margin-top:20px;" class="bg-main-bg flex items-center justify-around mt-6 w-full h-60 rounded-xl mx-auto">
        <div class="rounded-xl">
          <img src="${item.image}" alt="${item.title}" class="w-full h-52 aspect-square object-cover">
        </div>
        <div class="w-[70%] h-52">
          <div class="flex items-center justify-between">
            <h6 class="font-semibold text-xl leading-8 text-white">${item.title}</h6>
            <h6 class="font-semibold text-xl leading-8 text-indigo-600">${item.price}</h6>
          </div>
          <div class="mt-3">
            <p class="mt-2 font-normal text-sm leading-6 text-gray-500">${item.description}</p>
          </div>
          <div class="flex gap-3">
            <button class="button-edit bg-green-600" data-id="${item.id}">Edit</button>
            <button class="button-delete bg-red-600" data-id="${item.id}">Delete</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Yangi ma'lumot qo'shish funksiyasi
function addNewItem(newItem) {
  fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Added new item:", data);
      fetchData(); // Yangilangan ro'yxatni yuklash
    })
    .catch((error) => console.error("Error adding new item:", error));
}

// Ma'lumotni o'chirish funksiyasi
function deleteItem(itemId) {
  fetch(`${apiURL}/${itemId}`, {
    method: "DELETE",
  })
    .then(() => {
      console.log(`Deleted item with ID: ${itemId}`);
      fetchData(); // Yangilangan ro'yxatni yuklash
    })
    .catch((error) => console.error("Error deleting item:", error));
}

// Ma'lumotni tahrirlash funksiyasi
function editItem(itemId) {
  const updatedData = {
    title: "Updated Title",
    price: "$150",
    description: "Updated description",
  };

  fetch(`${apiURL}/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Updated item:", data);
      fetchData(); // Yangilangan ro'yxatni yuklash
    })
    .catch((error) => console.error("Error updating item:", error));
}
