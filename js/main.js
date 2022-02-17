// Add the header to each page with main.js file

const PIXABAY_API_KEY = "9602505-f76ea265b3e81cda17324512f";

// Max items the api accept is 100
const ITEMS_COUNT = 100;

console.log(window.location.pathname);
if (window.location.pathname != "/index.html" && window.location.pathname != "/" && window.location.pathname != "/leaderboard.html" && window.location.pathname != "/rewards.html")
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
    console.log(sessionStorage.getItem("cart"));

    console.log(sessionStorage.getItem('startTime'));

    $("body").append(`<div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >
    <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content text-center rounded-5">
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
        <p><i class="bi bi-bank"></i> State ~ ${user.address.state}</p>
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
    <div class="modal-content rounded-5">
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
        <div class="modal-body rounded-5">
        <h1 class="navbar-brand col-5 fs-3 fw-bolder mt-0">COMMERCIUM Member</h1>
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
    <div class="modal-content rounded-5">
        <div class="modal-header">
        <h4 class="modal-title" id="exampleModalToggleLabel2">Shopping List</h4>
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
    <a class="navbar-brand col-5" href="catalogPage.html">fastgame</a>
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
        <section id="timeSection" class="d-flex align-items-center ms-0 ms-xl-5">
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
        let item = findItem(items, product.uid);
        $("#itemList").append(`<div class="border border-3 rounded mb-3 p-3"><p><i class="bi bi-exclamation-circle"></i> ${item.product_name}</p> 
        <p class="mb-0"><i class="bi bi-123"></i> Quantity - ${product.quantity}</p> <p class="mb-0"><i class="bi bi-123"></i> 
        Categories - ${item.department}<div>`);
    });

    let updateTimer = setInterval(() => {
        let time = Date.now() - parseInt(sessionStorage.getItem("startTime"));
        $("#timer").text(millisecondsToMinutesAndSeconds(time));

        // $("#paymentDetails").submit(()=> {
        //     clearInterval(updateTimer);
        // });
    }, 10);

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
            $("#filter-category .dropdown-menu").append(`<li><a class="btn dropdown-item" href="searchPage.html?category=${category}">${category}</a></li>`);
        });
    
        let items = JSON.parse(sessionStorage.getItem('items'));
    
        let currentItem = 0;
        let filteredItems = items;
    
        if(window.location.pathname == "/catalogPage.html") {
            let popular = [...items].sort((a, b) => b.itemsSold - a.itemsSold).slice(0, 12);
            displayItems(popular, 0, element="#popular", 12);
    
            currentItem = displayItems(filteredItems, 0);
        }
        else if (window.location.pathname == "/searchPage.html") {
            let search = ""; 
            if (url.searchParams.get("search") != null)
            {
                search = url.searchParams.get("search");
            }
            
            let categories = [];
            if (url.searchParams.get("category") != null) {
                categories = url.searchParams.get("category").split(",");
            }
    
            $("#productName").text(search);
    
            filteredItems = items.filter(item => {
                if (categories.length <= 0 || categories[0] == "") {
                    return item.product_name.toLowerCase().includes(search.toLowerCase());
                }
                else {
                    // filters it if either one of the categories is included in the item
                    return item.product_name.toLowerCase().includes(search.toLowerCase()) && item.department.split(" & ").some(category => categories.includes(category));
                }
            });
    
            console.log(filteredItems);
    
            currentItem = displayItems(filteredItems, 0);
        }
    
        updateCartItemNumber();
    
        $(window).scroll(() => { 
            // check if div is scrolled to the bottom
            if(($("#explore").position().top + $("#explore").height()) - (window.scrollY + window.innerHeight - 100) < 1) {
                currentItem = displayItems(filteredItems, currentItem);
            }
        });
    
        //   <span class="p"><i class="bi bi-bag-fill"></i> ${item.itemsSold}K</span>
    
        $("#searchArea").submit(event => { 
            event.preventDefault();
    
            let formData = new FormData(event.target);
            let search = formData.get("search");
    
            console.log(search);
            const param = new URLSearchParams(window.location.search);
            param.set("search", search);
    
            window.location.href = `searchPage.html?${param}`;
            
        });
    }
    
    if (window.location.pathname == "/productDesc.html") {
        const urlParams = new URLSearchParams(window.location.search);
        const uid = urlParams.get("productId");
    
        const item = findItem(JSON.parse(sessionStorage.getItem('items')), uid);
    
        $("#productName").text(item.product_name);
        $("#productCategory").text(item.category);
        $("#productSales").text(item.itemsSold + "K");
        $("#productPrice").text("S$" + item.price);
    
        for (let i = 0; i < item.largeImageURLs.length; i++) {
            const imageURL = item.largeImageURLs[i];
    
            $("#carouselExampleDark .carousel-indicators").append(`
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" ${i == 0 ? "class='active' aria-current='true'" : ""} aria-label="Slide ${i+1}"></button>
            `)
            $("#carouselExampleDark .carousel-inner").append(`
            <div class="carousel-item ${i == 0 ? "active" : ""}" data-bs-interval="3000">
                <img src="${imageURL}" class="d-block img-fluid w-100" alt="${item.product_name}">
            </div>
            `);
        }
    
        $("#addToCart").submit(event => { 
            event.preventDefault();
            
            const data = new FormData($("#addToCart").get(0));
            const quantity = data.get("quantity");
            
            addToCart(uid, quantity);

            if (window.location.pathname == "/productDesc.html") {
                window.location.href = "/catalogPage.html";
            }
        
            $('.toast').toast('show');
        });
    }
    
    if (window.location.pathname == "/checkout.html") {
        
        updateCart();
    
        $("#paymentDetails").submit(event => {
            event.preventDefault();

            let user = JSON.parse(sessionStorage.getItem("user"));
    
            const formData = new FormData(event.target);
    
            const TOTAL = 12;
    
            let first_name = formData.get("first_name").toLowerCase() == user.first_name.toLowerCase();
            let last_name = formData.get("last_name").toLowerCase() == user.last_name.toLowerCase();
            let email = formData.get("email").toLowerCase() == user.email.toLowerCase();
            let phone_number = formData.get("phone_number") == user.phone_number;
            let street_address = formData.get("street_address").toLowerCase() == user.address.street_address.toLowerCase();
            let city = formData.get("city").toLowerCase() == user.address.city.toLowerCase();
            let state = formData.get("state").toLowerCase() == user.address.state.toLowerCase();
            let zip_code = formData.get("zip_code").toLowerCase() == user.address.zip_code.toLowerCase();
            let credit_card_name = formData.get("credit_card_name").toLowerCase() == user.credit_card.credit_card_name.toLowerCase();
            let cc_number = formData.get("cc_number") == user.credit_card.cc_number;
            let CVV = formData.get("CVV") == user.credit_card.CVV;
            let expiration_date = formData.get("expiration_date") == user.credit_card.expiration_date;
    
            let sum = first_name + last_name + email + phone_number + street_address + city + state + zip_code + credit_card_name + cc_number + CVV + expiration_date;
            
            let requiredItem = user.taskList;
            let purchasedItem = JSON.parse(sessionStorage.getItem('cart'));
    
            let itemsDidntBuy = findCartDiff([...requiredItem], [...purchasedItem]);
            let itemsBuyForNoReason = findCartDiff([...purchasedItem], [...requiredItem]);
    
            const cartAccuracy = (requiredItem.length - (itemsDidntBuy.length + itemsBuyForNoReason.length)) / requiredItem.length;
            
            const totalAccuracy = (sum/TOTAL) + cartAccuracy;
    
            const timeTaken = Date.now() - parseInt(sessionStorage.getItem("startTime"));
    
            const score = totalAccuracy * (1/ timeTaken) * 10000;
            console.log(totalAccuracy);
    
            // display modal and show the speed runner result
            const endGameModal = new bootstrap.Modal($('#endGameModal').get(0));
    
            $("#time").text(millisecondsToMinutesAndSeconds(timeTaken));
            $("#score").text(score);
            $("#accuracy").text(totalAccuracy + "%");
    
            endGameModal.show();
        });
    }
}

function updateCartItemNumber() {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    $("#cartItems").text(cart.length);
}

function millisecondsToMinutesAndSeconds(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = (Math.floor(time - minutes * 60000) / 1000).toFixed(2);
    return `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(5, 0)}`;
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

        let items = JSON.parse(sessionStorage.getItem("items"));
        
        let itemsCount = parseInt(( Math.random() * (ITEMS_COUNT * 0.05) ) + 1);
        for (let i = 0; i < itemsCount; i++) {
            user.taskList.push({
                uid: items[parseInt(Math.random() * ITEMS_COUNT)].uid,
                quantity: parseInt( (Math.random() * 9) + 1 )
            });
        }

        sessionStorage.setItem("user", JSON.stringify(user));
        
    }).catch(error => {
        console.log(error);
    });
}

// find the difference between one cart and another
function findCartDiff(arr1, arr2) {
    const diff = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const item = arr1[i];
        
        let isSame = false;
        for (let j = 0; j < arr2.length; j++) {
            const cartItem = arr2[j];

            if (item.uid == cartItem.uid && item.quantity == cartItem.quantity) {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
                i--;
                j--;
                isSame = true;
                break;
            }
        }

        if (!isSame) {
            diff.push(item);
        }
    }

    return diff;
}

function updateCart() {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const items = JSON.parse(sessionStorage.getItem('items'));
    let totalPrice = 0;

    $("#products").empty();

    cart.forEach(item => {
        const product = findItem(items, item.uid);
        let subTotal = item.quantity * product.price;
        $("#products").append(`
        <li class="d-flex flex-wrap p-3">
            <div id="addedFlex" class="d-flex col-12 justify-content-between">
                <div id="addedFlex" class="d-flex">
                    <img class="cartImg" src="${product.largeImageURLs}">
                    <div id="itemDesc" class="ms-5 p-3">
                    <h5>${product.product_name}</h5> 
                    Price: S$${subTotal.toFixed(2)}
                    <hr class="blackhr">
                    <p>Quantity: </p>
                    <input type="number" class="form-control form-control-lg" name="quantity" onchange="updateValue(${item.cartId}, this)" value="${item.quantity}" min="1" max="100">
                </div>
            </div>
            <div id="removeBtn" class="p-3 mt-5">
                <button class="btn" onclick="removeFromCart(${item.cartId})">
                <i class="bi bi-x-lg"></i></button>
            </div>
        </li>
        `);
        totalPrice += subTotal;
    });

    $("#totalPrice").text("S$" + (Math.round(totalPrice * 100) / 100).toFixed(2));
}

function updateValue(cartId, element) {
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    cart.forEach(item => {
        if (item.cartId == cartId) {
            item.quantity = parseInt(element.value);
        }
    });

    console.log(cart);
    sessionStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

function removeFromCart(cartId) {
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    cart = cart.filter(item => item.cartId != cartId);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

function addToCart(uid, quantity) {
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    let item = {
        cartId: cart.length,
        uid: uid,
        quantity: quantity
    };

    cart.push(item);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    updateCartItemNumber();


}

function findItem(items, uid) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.uid == uid) {
            return item;
        }
    }

    throw new Error("Item not found");
}

function displayItems(items, startingPosition, element="#explore", numberOfItems=8) {

    for (let i = startingPosition; i < startingPosition + numberOfItems; i++) {
        
        const item = items[i];
        if (item == null) {
            break;
        }

        $(element).append(`
        <div class="card-full">
          <a href="productDesc.html?productId=${item.uid}" class="card rounded-4">
            <div class="card-background" style="background-image: url('${item.largeImageURLs}');" class="card-img-top rounded-4"></div>
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
          <button class="btn btn-primary" onclick="addToCart('${item.uid}', 1)">ADD TO CART</button>
        </div>
        `);
    }

    return startingPosition + numberOfItems;
}

function filterCategory(category) {

    let url = new URL(window.location.href);

    if (url.searchParams.get("category") == null || url.searchParams.get("category") == "") {
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
            delete item.id;
            delete item.color;

            // Items sold in thousands
            // TODO: generate the items sold using normal distribution
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

            item.largeImageURLs = [];

            for (let i = 0; i < result.hits.length; i++) {
                item.largeImageURLs.push(result.hits[i].largeImageURL);
            }

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
            sessionStorage.setItem("startTime", Date.now());
            sessionStorage.setItem("cart", JSON.stringify([]));
            window.location.href = "/catalogPage.html";
        });
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

function endGame() {
    sessionStorage.clear();
    window.location.href = "/index.html";
}

function finishGame() {
    sessionStorage.setItem("endTime", Date.now());
    //TODO ADD POINTS AND ACCURACY
    window.location.href = "/leaderboard.html";
}
