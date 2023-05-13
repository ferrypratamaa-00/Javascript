// const cards = document.querySelectorAll(".card");
// const close = document.querySelectorAll(".close");

// // for (let i = 0; i < close.length; i++) {
// //   close[i].addEventListener("click", function (e) {
// //     // close[i].parentElement.style.display = "none";
// //     e.target.parentElement.style.display = "none";
// //   });
// // }

// close.forEach((e) => {
//   e.addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); // preventDefault untuk menghentikan aksi default
//     e.stopPropagation();
//   });
// });

// // const closeTraversal = document.querySelector(".nama");

// // console.log(closeTraversal.parentElement);
// // console.log(closeTraversal.parentNode);
// // console.log(closeTraversal.previousElementSibling);
// // console.log(closeTraversal.previousSibling);
// // console.log(closeTraversal.nextElementSibling);
// // console.log(closeTraversal.nextSibling);

// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
    console.log(e.target);
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
