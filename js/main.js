// Add the header to each page with main.js file

const PIXABAY_API_KEY = "9602505-f76ea265b3e81cda17324512f";

// Max items the api accept is 100
const ITEMS_COUNT = 100;

console.log(window.location.pathname);
if (window.location.pathname != "/index.html" && window.location.pathname != "/")
{

    // if (sessionStorage.getItem('items') == null || sessionStorage.getItem('items') == "[]" || sessionStorage.getItem('items') == "") {
    //     window.location.href = "/index.html"

    //     if (sessionStorage.getItem("user") == null || sessionStorage.getItem("user") == "") {
    //         window.location.href = "/index.html"
    //     }
    // }

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
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">User Information</h4>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
        ></button>
        </div>
        <div class="modal-body">
        <img
            src="${user.avatar}"
            alt=""
            srcset=""
        />
        <p>First Name: ${user.first_name}</p>
        <p>Last Name: ${user.last_name}</p>
        <p>Gender: ${user.gender}</p>
        <p>Email: ${user.email}</p>
        <p>Phone Number: ${user.phone_number}</p>
        <p>Date of Birth: ${user.date_of_birth}</p>
        <p>Country: ${user.address.country}</p>
        <p>State: ${user.address.state}</p>
        <p>City: ${user.address.city}</p>
        <p>Street Address: ${user.address.street_address}</p>
        <p>Zip Code: ${user.address.zip_code}</p>
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
            Credit Card Details
        </h4>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
        ></button>
        </div>
        <div class="modal-body">
        <p>Name On Card: ${user.credit_card.credit_card_name}</p>
        <p>Credit Card Number: ${user.credit_card.cc_number}</p>
        <p>CVV: ${user.credit_card.CVV}</p>
        <p>Expiry Date: ${user.credit_card.expiration_date}</p>
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

            // Add image to item
            $.ajax({
                url: `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&orientation=horizontal&editors_choice=true&per_page=3&q=${item.product_name.split(' ')[item.product_name.split(' ').length - 1]}`
            }).done(result => {
                if (result.hits.length <= 0) {
                    // Put a default image
                }

                item.thumbnailImageURL = result.hits[0].webformatURL;
                item.largeImageURL1 = result.hits[0].largeImageURL;
                item.largeImageURL2 = result.hits[1].largeImageURL;

            }).fail(error => {
                console.log(error);
            });

            items.push(item);
        });

        sessionStorage.setItem("items", JSON.stringify(items));
    });
}

function startGame() {  
    generateAndStoreItems()
    .finally( () => {
        generateAndStoreUser().finally( () => {
            window.location.href = "/catalogPage.html";
        });
    });

}

function endGame() {
    sessionStorage.clear();
    window.location.href = "/index.html";
}
