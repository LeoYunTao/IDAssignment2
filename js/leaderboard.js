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

var rankList = [];
function getLeaderboard(limit=100, all = true){
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fastgame-8ea2.restdb.io/rest/details",
        "method": "GET",
        "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
        }
    }

    /* $.ajax(settings).done(function (response) {
      let content = "";
      for (var i = 0; i < response.length && i < limit; i++) {
        content = `${content}<th id='${response[i]._id} class="fs-5" scope="row"'>
        <td class="fs-5">${response[i].name}</td>
        <td class="fs-5">${response[i].time}</td>
        <td class="fs-5">${response[i].score}</td>
        <td class="fs-5">${response[i].accuracy}%</td>
        </th>`;
        $("#leaderBoard tbody").html(content);
      } */

      //Sort this goddamn thing!
    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.length && i < limit; i++) {
            var tempContent = [response[i].name, response[i].time, response[i].score, response[i].accuracy]
            rankList[i] = tempContent
            /* if (rankList.count == 0) {
                break;
            }
    
            else {
                for (var i = 0; i < rankList.length && i < limit; i++)
                    if (tempContent.response[i].score > rankList[i][2] && tempContent.response[i].accuracy > rankList[i][3]) {
                        rankList.
                        rankList[i] = tempContent;
                    }
            } */
            
        }
        rankList.sort(function(a = rankList[i].score, b = rankList[i++].score){return b - a})
        //return rankList;
        let content = "";
        for (var i = 0; i < rankList.length && i < limit; i++) {
            
            content = `${content}<tr class="fs-5" scope="row"'>
            <td class="fs-5">${i+1}</td>
            <td id="name" class="fs-5">${rankList[i][0]}</td>
            <td id="time" class="fs-5">${rankList[i][1]}</td>
            <td class="fs-5">${rankList[i][2]}</td>
            <td class="fs-5">${rankList[i][3]}%</td>
            </tr>`;
            var timeOnly = new Date(rankList[i][1]);
            let text1 = String(addZero(timeOnly.getMinutes()));
            let text2 = String(addZero(timeOnly.getSeconds()));
            let recordTime = text1.concat(":", text2)
            $("#leaderBoard tbody").html(content);
            $("#leaderBoard #time").html(recordTime);
        }
    });
}

getLeaderboard();

/* function printLeaderBoard(rankList) shifted to line 88 {
    
}

printLeaderBoard(rankList); */

//for the search button
function leaderboardSearch(rankList){
    var newRankList = [];
    let input = document.getElementById('leaderSearch').value
    input=input.toLowerCase();
    let x = rankList;
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i][0].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            newRankList[newRankList.length ++] = x[i];
        }
    }
    newRankList.sort(function(a = newRankList[i].score, b = newRankList[i++].score){return b - a})
    let content = "";
    for (var i = 0; i < newRankList.length && i < limit; i++) {
        content = `${content}<th class="fs-5" scope="row"'>
        <td class="fs-5">${i+1}</td>
        <td id="name" class="fs-5">${newRankList[i][0]}</tr>
        <td class="fs-5">${newRankList[i][1]}</td>
        <td class="fs-5">${newRankList[i][2]}</td>
        <td class="fs-5">${newRankList[i][3]}%</td>
        </tr>`;
        
        $("#leaderBoard tbody").html(content);
    }
}

// leaderboardSearch(rankList);