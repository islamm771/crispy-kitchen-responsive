let btnNext = document.querySelector(".next")
let btnPrev = document.querySelector(".prev")
let arr = ["1.jpg", "2.jpg", "3.jpg"];
let img = document.querySelector(".slide-img");
let index = 0;
let state = document.querySelector(".state");


if (btnNext != null){
    btnNext.onclick = nextImage;
    btnPrev.onclick = prevImage;
}

setInterval(nextImage , 3000)


let datenow = new Date();
let timenow;
if (datenow.getHours() > 10 && datenow.getHours() < 20) {
    state.innerHTML += "Open";
} else {
    state.innerHTML += "Close";
}


if (btnNext != null){
    function nextImage() {
      index += 1;
      if (index >= arr.length) {
        index = 0;
      }
      img.setAttribute("src", `images/slide/${arr[index]}`);
    }
    function prevImage() {
      index -= 1;
      if (index < 0) {
        index = arr.length - 1;
      }
      img.setAttribute("src", `images/slide/${arr[index]}`);
    }
}