
const score = localStorage.getItem('score');
if (localStorage.getItem('score') !== null) {
    $("#score").text(score);
}

function redeemCode(pointsRequired) {
    if (score == null || score < pointsRequired) {
        alert("You dont have enough points to redeem this reward");
        return;
    }

    alert("successfully redeemed");
    localStorage.clear();

    window.location.href = "leaderboard.html";
}
