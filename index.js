let scoreHome = document.getElementById("score-home")
//console.log(scoreHome)
let scoreGuest = document.getElementById("score-guest")
//console.log(scoreGuest)

let countHome = 0
let countGuest = 0

function add1PointHome() {
    countHome += 1
    scoreHome.textContent = countHome
}

function add2PointsHome() {
    countHome += 2
    scoreHome.textContent = countHome
}

function add3PointsHome() {
    countHome += 3
    scoreHome.textContent = countHome
}


function add1PointGuest() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function add2PointsGuest() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function add3PointsGuest() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}