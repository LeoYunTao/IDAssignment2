console.log(window.location.pathname);
const PIXABAY_API_KEY = "9602505-f76ea265b3e81cda17324512f";

// Max items the api accept is 100
const ITEMS_COUNT = 100;

if (sessionStorage.getItem('items') == null || sessionStorage.getItem('items') == "[]" || sessionStorage.getItem('items') == "") {
    generateAndStoreItems();

    if (sessionStorage.getItem("user") == null || sessionStorage.getItem("user") == "") {
        generateAndStoreUser();
    }
}

function generateAndStoreUser() {
    $.ajax({
        url: `https://random-data-api.com/api/users/random_user`
    }).done(user => {
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
        user.credit_card.expiration_date = expirationDate.getFullYear() + "-" + expirationDate.getMonth();

        user.taskList = [];
        
        let itemsCount = parseInt(Math.random() * (ITEMS_COUNT * 0.1));
        for (let i = 0; i < itemsCount; i++) {
            user.taskList.push({
                itemIndex: parseInt(Math.random() * ITEMS_COUNT),
                quantity: parseInt(Math.random() * 10)
            });
        }

        sessionStorage.setItem("user", JSON.stringify(user));
        console.log(user);
    });
}

function generateAndStoreItems() {
    let items = [];

    $.ajax({
        url: `https://random-data-api.com/api/commerce/random_commerce?size=${ITEMS_COUNT}`,
    }).done(result => {
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

        console.log(items);
    });
}
