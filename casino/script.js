const scroller = document.getElementById("swinger");
const one = document.querySelector(".coin");
scroller.onclick = () => {
    swing();
}
function swing() {
    var partOne = Math.round(Math.floor(Math.random() * 6));
    var partTwo = Math.round(Math.floor(Math.random() * 6));
    var partThree = Math.round(Math.floor(Math.random() * 6));
    if (partOne == 0) {
        window.scroll({ top: 0, behavior: "smooth" });
        document.querySelector('.one').innerHTML = `
    <img src="coin.png" class="coin">`;
    }
    else if (partOne == 1) {
        document.querySelector('.one').innerHTML = `
    <img src="grape.jpg" class="grape">
    `;
    }
    else if (partOne == 2) {
        document.querySelector('.one').innerHTML = `
    <img src="bread.jpg" class="bread">
    `;
    }
    else if (partOne == 3) {
        document.querySelector('.one').innerHTML = `
    <img src="juice.png" class="juice">
    `;
    }
    else if (partOne == 4) {
        document.querySelector('.one').innerHTML = `
    <img src="onion.png" class="onion">
    `;
    }
    else if (partOne == 5) {
        document.querySelector('.one').innerHTML = `
    <img src="rose.jpg" class="rose">
    `;
    }
    console.log(partOne);
}