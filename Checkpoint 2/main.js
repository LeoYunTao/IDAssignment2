const ITEMS = 100;
$.ajax({
    url: `https://random-data-api.com/api/commerce/random_commerce?size=${ITEMS}`,
    success: result => {
        console.log(result);
    }
})