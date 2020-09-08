let home = document.getElementById("home");
let about = document.getElementById("about");
let proyects = document.getElementById("proyects");

function scroll(){
    home.scrollIntoView();
}
  
window.onload = function(){
    scroll();
}

/* function scrollTo(){
    if(window.location === home){
      if(window.onscroll === -1){
        window.scrollIntoView(about);
      } else {
        window.scrollIntoView(proyects);
      }
    } else if(window.location === about){
      window.scrollIntoView(home);
    } else if(window.location === proyects){
      window.scrollIntoView(home);
    }
    
} */

/* window.addEventListener("onscroll", () => {
  window.scrollX(100);
}); */

/* window.scrollBy(window.innerWidth, 0); */
/* function scrollTo() {
  home.scrollIntoView();
  about.scrollIntoView();
  proyects.scrollIntoView();
} */