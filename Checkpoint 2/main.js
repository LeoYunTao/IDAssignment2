const PIXABAY_API_KEY = "9602505-f76ea265b3e81cda17324512f";

// Max items the api accept is 100
const ITEMS_COUNT = 100;

if (sessionStorage.getItem('items') == null || sessionStorage.getItem('items') == "[]" || sessionStorage.getItem('items') == "") {
    
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

            // Add image to item
            $.ajax({
                url: `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&orientation=horizontal&editors_choice=true&per_page=3&q=${item.product_name.split(' ')[item.product_name.split(' ').length - 1]}`
            }).done(result => {
                if (result.hits.length <= 0) {
                    // Put a default image
                }

                item.thumbnailImageURL = result.hits[0].webformatURL;
                item.largeImageURL = result.hits[0].largeImageURL;;
            }).fail(error => {
                console.log(error);
            });

            items.push(item);
        });

        sessionStorage.setItem("items", JSON.stringify(items));

        console.log(items);
    });
}

let items = JSON.parse(sessionStorage.getItem('items'));

console.log(items);
