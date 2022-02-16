// Add the header to each page with main.js file

const PIXABAY_API_KEY = "9602505-f76ea265b3e81cda17324512f";

// Max items the api accept is 100
const ITEMS_COUNT = 100;

console.log(window.location.pathname);
if (window.location.pathname != "/index.html" && window.location.pathname != "/")
{

    if (sessionStorage.getItem('items') == null || sessionStorage.getItem('items') == "[]" || sessionStorage.getItem('items') == "") {
        window.location.href = "/index.html"

        if (sessionStorage.getItem("user") == null || sessionStorage.getItem("user") == "") {
            window.location.href = "/index.html"
        }
    }

    let items = JSON.parse(sessionStorage.getItem('items'));
    let user = JSON.parse(sessionStorage.getItem('user'));

    console.log(items);
    console.log(user);

    $("body").append(`<div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >
    <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content text-center">
        <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel"><i class="bi bi-person-circle"></i> User Profile</h4>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
        ></button>
        </div>
        <div class="modal-body">
        <img class="rounded-circle shadow justify-content-center col-7 mb-3"
            src="${user.avatar}"
            alt=""
            srcset=""
        />
        <p><i class="bi bi-person-fill"></i> First Name ~ ${user.first_name}</p>
        <p><i class="bi bi-person-fill"></i> Last Name ~ ${user.last_name}</p>
        <p><i class="bi bi-gender-ambiguous"></i> Gender ~ ${user.gender}</p>
        <p><i class="bi bi-envelope-fill"></i> Email ~ ${user.email}</p>
        <p><i class="bi bi-telephone-fill"></i> Phone Number ~ ${user.phone_number}</p>
        <p><i class="bi bi-calendar-fill"></i> Date of Birth ~ ${user.date_of_birth}</p>
        <p><i class="bi bi-globe2"></i> Country ~ ${user.address.country}</p>
        <p><i class="bi bi-image-fill"></i> State ~ ${user.address.state}</p>
        <p><i class="bi bi-building"></i> City ~ ${user.address.city}</p>
        <p><i class="bi bi-signpost-split-fill"></i> Street Address ~ ${user.address.street_address}</p>
        <p><i class="bi bi-house-door-fill"></i> Zip Code ~ ${user.address.zip_code}</p>
        </div>
        <div class="modal-footer">
        <button
            class="btn btn-light btn-sm"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
            disabled
        >
            <i class="bi bi-arrow-left-short fs-2 lh-1"></i>
        </button>
        <p>1 / 3</p>
        <button
            class="btn btn-light btn-sm"
            data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal"
        >
            <i class="bi bi-arrow-right-short fs-2 lh-1"></i>
        </button>
        </div>
    </div>
    </div>
    </div>
    <div
    class="modal fade"
    id="exampleModalToggle2"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
    >
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title" id="exampleModalToggleLabel2">
            <i class="bi bi-credit-card-2-front-fill"></i> Credit Card Details
        </h4>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
        ></button>
        </div>
        <div class="modal-body border border-3 rounded-5">
        <h1 class="navbar-brand col-5 fs-3 fw-bolder mt-3">COMMERCIUM Member</h1>
        <h1 class="mt-0 ms-3"><i class="bi bi-columns"></i></h1>
        <h3 class="mb-0 fw">${user.credit_card.cc_number}</h3>
        <h4 class="fw-lighter fs-6 m-0 mb-0">VALID-THRU:<br>${user.credit_card.expiration_date}</h4>
        <h3 class="m-0">${user.credit_card.credit_card_name}</h3>
        <p class="lh-1 mb-0 text-end">CVV ${user.credit_card.CVV}</p>
        
        </div>
        <div class="modal-footer">
        <button
            class="btn btn-light btn-sm"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
        >
            <i class="bi bi-arrow-left-short fs-2 lh-1"></i>
        </button>
        <p>2 / 3</p>
        <button
            class="btn btn-light btn-sm"
            data-bs-target="#exampleModalToggle3"
            data-bs-toggle="modal"
        >
            <i class="bi bi-arrow-right-short fs-2 lh-1"></i>
        </button>
        </div>
    </div>
    </div>
    </div>
    <div
    class="modal fade"
    id="exampleModalToggle3"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
    >
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title" id="exampleModalToggleLabel2">Items</h4>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
        ></button>
        </div>
        <div class="modal-body" id="itemList"></div>
        <div class="modal-footer">
        <button
            class="btn btn-light btn-sm"
            data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal"
        >
            <i class="bi bi-arrow-left-short fs-2 lh-1"></i>
        </button>
        <p>3 / 3</p>
        <button
            class="btn btn-light btn-sm"
            data-bs-target="#exampleModalToggle3"
            data-bs-toggle="modal"
            disabled
        >
            <i class="bi bi-arrow-right-short fs-2 lh-1"></i>
        </button>
        </div>
    </div>
    </div>
    </div>

    <header class="fixed-top">
    <div class="navbar navbar-expand-md navbar-light container">
    <a class="navbar-brand col-5" href="catalogPage.html">commercium</a>
    <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <section class="d-flex align-items-center ms-5">
        <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_2Lm1d0.json"
            background="transparent"
            speed="1"
            style="height: 40px; width: auto"
            loop
            autoplay
        >
        </lottie-player>
        <p id="timer" class="mb-0">00:00:00</p>
        </section>
        <div class="navbar-nav ms-auto">
        <button
            class="btn nav-link active mx-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            <img src="images/list_alt_black_24dp.svg" alt="task-list" />
        </button>
        <button class="btn nav-link mx-2" onclick="restartGame()"
            ><img src="images/replay_black_24dp.svg" alt="restart-game"
        /></button>
        <button class="btn nav-link mx-2" onclick="endGame()"
            ><img
            src="images/close_black_24dp.svg"
            width="28px"
            alt="end-game"
        /></button>
        </div>
    </div>
    </div>
    </header>`);

    user.taskList.forEach(product => {
        $("#itemList").append(`<p>Product Name: ${items[product.itemIndex].product_name}</p> <p>Quantity: ${product.quantity}</p>`);
    });

}

function restartGame() {
    let isConfirm = confirm("Are you sure you want to restart the game?");
    if (!isConfirm) {
        return;
    }
    
    sessionStorage.clear();
    startGame();
}

function generateAndStoreUser() {
    return fetch(`https://random-data-api.com/api/users/random_user`)
    .then(response => response.json())
    .then(user => {
        delete user.uid;
        delete user.password;
        delete user.username;
        delete user.social_insurance_number;
        delete user.employment;
        delete user.address.coordinates;
        delete user.subscription;

        user.credit_card.credit_card_name = (user.last_name + " " + user.first_name).toUpperCase();
        user.credit_card.CVV = parseInt(Math.random() * 1000);

        let currentDate = new Date(Date.now());
        let expirationDate = new Date(currentDate.setMonth(currentDate.getMonth() + parseInt(Math.random() * 48))) ;
        user.credit_card.expiration_date = expirationDate.getFullYear() + "-" + (expirationDate.getMonth()+1);

        user.taskList = [];
        
        let itemsCount = parseInt(Math.random() * (ITEMS_COUNT * 0.1));
        for (let i = 0; i < itemsCount; i++) {
            user.taskList.push({
                itemIndex: parseInt(Math.random() * ITEMS_COUNT),
                quantity: parseInt( (Math.random() * 9) + 1 )
            });
        }

        sessionStorage.setItem("user", JSON.stringify(user));
    })
}

if (window.location.pathname == "/catalogPage.html" || window.location.pathname == "/searchPage.html") {
    let url = new URL(window.location.href);


    let categorySearched = null;
    if (url.searchParams.get("category") != null) {
        categorySearched = url.searchParams.get("category").split(",");
    }

    let categories = JSON.parse(sessionStorage.getItem('categories'));
    categories.forEach(category => {
        if (categorySearched != null && categorySearched.includes(category))
        {
            $("#category").append(`<button class="btn btn-primary btn-sm me-3 mb-3 fs-6 rounded-pill" onclick="filterCategory('${category}')">${category}</button>`);
        }
        else
        {
            $("#category").append(`<button class="btn btn-outline-primary btn-sm me-3 mb-3 fs-6 rounded-pill" onclick="filterCategory('${category}')">${category}</button>`);
        }
        $("#filter-category .dropdown-menu").append(`<li><a class="dropdown-item" href="searchPage.html?category=${category}">${category}</a></li>`);
    });

    let items = JSON.parse(sessionStorage.getItem('items'));

    const numberOfDisplayedItems = 8;
    let currentItem = 0;
    for (let i = currentItem; i < currentItem + numberOfDisplayedItems; i++) {
        const item = items[i];
        
        $("#explore").append(`
        <div class="card-full">
          <a href="productDesc.html?productId=${i}" class="card rounded-4">
            <div class="card-background" style="background-image: url('${item.thumbnailImageURL}');" class="card-img-top rounded-4"></div>
            <div class="card-body">
              <span class="p me-2"
                ><i class="bi bi-tags-fill"></i> ${item.department}</span
              > 
              <h4 class="card-title mt-1">${item.product_name}</h4>
            </div>
            <div class="card-footer bg-transparent border-0">
              <h4>S$${(Math.round(item.price * 100) / 100).toFixed(2)}</h4>
            </div>
          </a>
          <button class="btn btn-primary">ADD TO CART</button>
        </div>
        `);
    }

    // items.forEach(item => {
    //     $("#explore").append(`
    //     <div class="card-full">
    //       <a href="productDesc.html?productId=${item.id}" class="card rounded-4">
    //         <div class="card-background" style="background-image: url('${item.thumbnailImageURL}');" class="card-img-top rounded-4"></div>
    //         <div class="card-body">
    //           <span class="p me-2"
    //             ><i class="bi bi-tags-fill"></i> ${item.department}</span
    //           > 
    //           <h4 class="card-title mt-1">${item.product_name}</h4>
    //         </div>
    //         <div class="card-footer bg-transparent border-0">
    //           <h4>S$${(Math.round(item.price * 100) / 100).toFixed(2)}</h4>
    //         </div>
    //       </a>
    //       <button class="btn btn-primary">ADD TO CART</button>
    //     </div>
    //     `);
    // });

    //TODO Loads the items 10 at at a time

    //   <span class="p"><i class="bi bi-bag-fill"></i> ${item.itemsSold}K</span>
}

function filterCategory(category) {

    let url = new URL(window.location.href);

    if (url.searchParams.get("category") == null) {
        url.searchParams.set("category", category);

    } else {
        if (url.searchParams.get("category").split(",").includes(category)) {
            url.searchParams.set("category", url.searchParams.get("category").split(",").filter(item => item != category).join(","));
        } else {
            url.searchParams.set("category", url.searchParams.get("category") + "," + category);
        }
    }

    window.location.href = "/searchPage.html?" + url.searchParams;
}

function generateAndStoreItems() {
    let items = [];

    return fetch(`https://random-data-api.com/api/commerce/random_commerce?size=${ITEMS_COUNT}`)
    .then(response => response.json())
    .then(result => {
        result.forEach(item => {

            // Delete keys that +are not needed
            delete item.price_string;
            delete item.material;
            delete item.uid;
            delete item.color;

            // Items sold in thousands
            let itemsSold = parseInt(Math.random() * 100);
            item.itemsSold = itemsSold;

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&orientation=horizontal&editors_choice=true&per_page=3&q=${item.product_name.split(' ')[item.product_name.split(' ').length - 1]}`, false ); // false for synchronous request
            xmlHttp.send();
            let result = JSON.parse(xmlHttp.responseText);

            if (result.hits.length <= 0) {
                // Put a default image
            }
            
            item.thumbnailImageURL = result.hits[0].webformatURL;
            item.largeImageURL1 = result.hits[0].largeImageURL;
            item.largeImageURL2 = result.hits[1].largeImageURL;

            items.push(item);
        });


    }).then(() => {
        sessionStorage.setItem("items", JSON.stringify(items));
    });
}

function getItemsCategory() {
    let items = JSON.parse(sessionStorage.getItem('items'));
    let categories = [];
    items.forEach(item => {
        item.department.split(" & ").forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category);
            }
        });
    });

    return categories;
}

function startGame() {  
    generateAndStoreItems()
    .finally( () => {
        generateAndStoreUser().finally( () => {
            let categories = getItemsCategory();
            sessionStorage.setItem("categories", JSON.stringify(categories));
            window.location.href = "/catalogPage.html";
        });
    });

}

function endGame() {
    sessionStorage.clear();
    window.location.href = "/index.html";
}
