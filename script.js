// const light = document.getElementById("light");
// const text = document.getElementById("text");
// const circle = document.getElementById("circle");

// document.addEventListener("mousemove", addLight);

// function onLight(ev) {
//   if ([...circle.classList].includes("hideElement")) {
//     circle.classList.remove("hideElement");
//     document.addEventListener("mousemove", addLight);
//     circle.style.display = "block";
//   } else {
//     circle.classList.add("hideElement");
//     document.removeEventListener("mousemove", addLight);
//     circle.style.display = "none";
//     text.style.clipPath = "none";
//   }
// }

// function addLight(e) {
//   circle.style.left = `${e.pageX - 500}px`;
//   circle.style.top = `${e.pageY - 500}px`;
//   text.style.clipPath = `circle(480px at ${e.pageX}px ${e.pageY}px)`;
// }
