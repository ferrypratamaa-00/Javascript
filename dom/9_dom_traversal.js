const cards = document.querySelector(".card");
const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

close.forEach(e => {
    e.addEventListener("click", function (e) {
      // close[i].parentElement.style.display = "none";
      e.target.parentElement.style.display = "none";
    });
});

const closeTraversal = document.querySelector('.nama');

console.log(closeTraversal.parentElement);
console.log(closeTraversal.parentNode);
console.log(closeTraversal.previousElementSibling);
console.log(closeTraversal.previousSibling);
console.log(closeTraversal.nextElementSibling);
console.log(closeTraversal.nextSibling);
