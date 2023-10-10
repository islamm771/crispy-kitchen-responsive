let arr = ["1.jpg", "2.jpg", "3.jpg"];
let img = document.querySelector(".slide-img");
let index = 0;
let state = document.querySelector(".state");

setInterval(nextImage , 5000)


let datenow = new Date();
let timenow;
if(state != null){
  if (datenow.getHours() > 10 && datenow.getHours() < 20) {
    state.classList.remove("bg-danger");
    state.classList.add("bg-success");
    state.innerHTML += "Open";
  } else {
    state.classList.remove("bg-success");
    state.classList.add("bg-danger");
    state.innerHTML += "Close";
  }
}


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
