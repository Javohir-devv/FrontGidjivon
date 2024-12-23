let api = 'https://project06.onrender.com/category'
document.addEventListener("DOMContentLoaded", () => {
// Navigatsiya tugmalari uchun hodisalar
document.querySelector("#home").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.querySelector("#products").addEventListener("click", () => {
    window.location.href = "product.html";
});

document.querySelector("#history").addEventListener("click", () => {
    window.location.href = "history.html";
});

document.querySelector("#order").addEventListener("click", () => {
    window.location.href = "order.html";
});

// Kategoriya qo'shish modal oynasi
const addCategoryModal = document.querySelector("#cotigory-add");
const categoryAddBtn = document.querySelector(".catygoryAddBtn");
const closeAddBtn = document.querySelector("#closeAdd");

categoryAddBtn.addEventListener("click", () => {
    addCategoryModal.style.display = "grid";
});

closeAddBtn.addEventListener("click", () => {
    window.location.href = "cotigories.html";
});


// O'chirish modal oynasini sozlash
function initializeDeleteButtons() {
    const deleteModal = document.querySelector("#cotigory-del");
    const cancelDeleteBtn = document.querySelector("#del-canceling");
    const confirmDeleteBtn = document.querySelector("#del-product");
   
        let selectedId = null; // O'chiriladigan element ID-si
        confirmDeleteBtn.addEventListener("click", () => {
            if (selectedId) {
                deleteCategory(selectedId);
                deleteModal.classList.remove("hidden");
            }
        });
   
    
    // const deleteButtons = document.querySelectorAll(".del-cotigory");
    
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("del-cotigory")) {
            deleteModal.style.display = "grid";
            const parentElement = event.target.closest(".w-full");
            selectedId = parentElement?.getAttribute("data-id");
        }
    });
 

    cancelDeleteBtn.addEventListener("click", () => {
        deleteModal.classList.add("hidden");
        
    });
}

    

// API orqali kategoriya o'chirish
function deleteCategory(id) {
 
    fetch(`api/${id}/delete`, {
        method: "POST",
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.success) {
                alert("Element muvaffaqiyatli o'chirildi!");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                alert("Xatolik: " + response.error.message);
            }
        })
        .catch((error) => {
            alert("Xatolik: " + error.message);
        });
}

// Kategoriyalarni yaratish funksiyasi
function createProduct(array) {
    const productContainer = document.querySelector("#pruduct-container");
    const categoryCount = document.querySelector("#cotygory-length");

    categoryCount.textContent = array.length;

    array.forEach((item) => {
        const product = document.createElement("div");
        product.classList.add(
            "w-full",
            "gap-7",
            "rounded-xl",
            "flex",
            "items-center",
            "p-4",
            "col-span-2",
            "bg-black",
            "justify-between",
           
        );
        product.setAttribute("data-id", item._id);

        product.innerHTML = `
            <div class="flex gap-3   items-center">
                <div class="w-32 h-32 rounded-full overflow-hidden">
                    <img class="w-full" src="${item.image_url}" alt="Mahsulot rasm">
                </div>
                <div class="w-[300px]">
                    <h1 class="text-white text-3xl ">${item.en_name}</h1>
                    <p class="text-[#999] text-xl">Maxsulotlar: ${item.meals.length}</p>
                </div>
            </div>
            <div class="flex gap-3">
                <div class="button bg-green-600 edit-cotigory">
                    <div class="button-wrapper">
                        <div class="text">Edit</div>
                        <span class="icon"><i class="fa-solid fa-pen"></i></span>
                    </div>
                </div>
                <div class="button bg-red-600 del-cotigory">
                    <div class="button-wrapper">
                        <div class="text">Del</div>
                        <span class="icon"><i class="fa-solid fa-trash"></i></span>
                    </div>
                </div>
            </div>
        `;

        productContainer.appendChild(product);
    });
    
    initializeDeleteButtons();
    initializeEditButtons();
}

// API orqali kategoriyalarni olish
function getCategories() {
    fetch(api)
        .then((response) => response.json())
        .then((response) => {
            if (response.success) {
                createProduct(response.data.categories);
            }
        })
        .catch((error) => {
            console.error('Xatolik:', error); // Konsolga to'liq ma'lumotni chiqarish // Foydalanuvchiga qisqacha ma'lumotni chiqarish
        });  
}



// document.querySelector("#confirmAdd").addEventListener("click", () => {



//     const formElement = document.querySelector("#formData");
//     const formData = new FormData(formElement);
//     console.log(formData);
    


//     fetch("http://192.168.0.118:5050/category/create", {
//         method: "POST",
//         body: JSON.stringify(formData),
    
       
//     })
//         .then((response) => response.json())
//         .then((response) Delduct(response.data.categories);
//             } else {
//                 console.log("Error: " + response.error.message);
//             }
//         })
//         .catch((error) => {
//             console.log("Fetch Error: " + error.message);
//         });
// });
const form = document.querySelector("#formData")
    if (form) {
        
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const data = new FormData(e.target)

        

    fetch("http://192.168.0.118:5050/category/create", {
        method: "POST",
        body: data,
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.success) {
                alert("Category successfully created!");
                createProduct(response.data.categories);
            } else {
                console.log("Error: " + response.error.message);
            }
        })
        .catch((error) => {
            console.log("Fetch Error: " + error.message);
        });

    })
    }




// Rasmni yuklash va oldindan ko'rish
// Rasm yuklash va ko'rsatish funksiyasi
function initializeImageUpload(inputSelector, previewSelector) {
    document.querySelectorAll(inputSelector).forEach((input) => {
        input.addEventListener("change", (event) => {
            const file = event.target.files[0];
            const previewImage = input.closest("label").querySelector(previewSelector);

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewImage.src = e.target.result;
                    previewImage.classList.remove("hidden");
                };
                reader.readAsDataURL(file);
            } else {
                previewImage.src = "";
                previewImage.classList.add("hidden");
            }
        });
    });
}

// Funksiyani chaqirish
initializeImageUpload(".image-upload", ".preview-image");


// Edit tugmalar uchun hodisalar
function initializeEditButtons() {
    const editButtons = document.querySelectorAll(".edit-cotigory");
    const editModal = document.querySelector(".cotigory-edit");
    const closeEditBtn = document.querySelector("#closeEdit");

    editButtons.forEach((button) => {
        button.addEventListener("click", () => {
        editModal.style.display = "grid";
        });
    });

    closeEditBtn.addEventListener("click", () => {
        editModal.style.display = "none";
    });
}

    getCategories(); // Kategoriyalarni yuklash


});
