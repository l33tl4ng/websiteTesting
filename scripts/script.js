var num_of_clicks = 0;

function when_clicked() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if(num_of_clicks % 2 == 0){
    burger.classList.add("navbar__burger--is-active");
    nav.classList.add("navbar__nav--is-visible");
  } else{
    burger.classList.remove("navbar__burger--is-active");
    nav.classList.remove("navbar__nav--is-visible");
  }

  num_of_clicks += 1;
}