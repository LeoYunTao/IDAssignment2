const APIKEY = "620e41f234fd621565858720";

$("#finish").on("click", function (f) {
    f.preventDefault();

    let name = $("#name").val();
    let time = $("#time").val();
    let score = $("#score").val();
    let accuracy = $("#accuracy").val();

    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "name": name,
      "time": time,
      "score": score,
      "accuracy": accuracy,
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fastgame-8ea2.restdb.io/rest/details",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
            $("#finish").prop( "disabled", true);
            $("#???????????????????").trigger("reset");
            }
        }
        
        $.ajax(settings).done(function (response) {
        console.log(response);
    });
})

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

getLeaderboard();

let allPlayers = [];

$("#leaderSearch #floatingInput").keyup(event => {
    let filteredPlayers = allPlayers.filter( player => {
        return player.name.toLowerCase().includes($(event.target).val().toLowerCase());
    });

    updateTable(filteredPlayers);
});

//Chage the time attribute to a number
function getLeaderboard(){
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://fastgame-8ea2.restdb.io/rest/details?h={"$orderby":{"score":-1}}`,
        "method": "GET",
        "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        for (let i = 0; i < response.length; i++) {
            const player = response[i];
            player.rank = i + 1;
            allPlayers.push(player);
        }
        // rankList.sort(function(a = rankList[i].score, b = rankList[i++].score){return b - a})
        //return rankList;
        updateTable(allPlayers);
    });
}

function updateTable(rows, limit=100) {
    let content = "";
    for (var i = 0; i < rows.length && i < limit; i++) {

        content = `${content}<tr class="fs-5" scope="row"'>
            <td class="fs-5">${rows[i].rank}</td>
            <td id="name" class="fs-5">${rows[i].name}</td>
            <td id="time" class="fs-5">${rows[i][1]}</td>
            <td class="fs-5">${rows[i].score}</td>
            <td class="fs-5">${rows[i].accuracy}%</td>
            </tr>`;
        $("#leaderBoard tbody").html(content);
    }
}
