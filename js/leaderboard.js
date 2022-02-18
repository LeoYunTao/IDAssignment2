$("#leaderBoard").hide();
$("#tableLoading").show();
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
        updateTable(allPlayers);
    });
}

function updateTable(rows, limit=100) {
    let content = "";
    for (var i = 0; i < rows.length && i < limit; i++) {
        content = `${content}<tr class="fs-5" scope="row"'>
            <td class="fs-5">${rows[i].rank}</td>
            <td id="name" class="fs-5">${rows[i].name}</td>
            <td id="time" class="fs-5">${millisecondsToMinutesAndSeconds(rows[i].time)}s</td>
            <td class="fs-5">${rows[i].score}</td>
            <td class="fs-5">${(rows[i].accuracy * 100).toFixed(2)}%</td>
            </tr>`;
        $("#leaderBoard tbody").html(content);
    }
    $("#tableLoading").hide();
    $("#leaderBoard").show();
}
