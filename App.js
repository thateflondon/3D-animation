//Movement animation
const container = document.querySelector(".container");
const card = document.querySelector(".card");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".informations h3");
const sizes = document.querySelector(".sizes");
const buttons = document.querySelectorAll(".sizes button");



//Moving animation event
container.addEventListener("mousemove", (e) => {
  //console.log(e.pageX, e.pageY);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //PopOut effect
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  purchase.style.transform = "translateZ(75px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //PopBack effect
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    if (!button.classList.contains('active')) {
      button.classList.add('active');
    }
  });
});
