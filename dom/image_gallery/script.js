const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

let old = null;
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    if(old != null){
        old.classList.remove("active");
    }
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    e.target.classList.add("active");
    old = e.target;
    // e.target.classList.add('active');
  }
});
