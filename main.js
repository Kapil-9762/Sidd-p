const navbar=document.querySelector("#home");
      window.addEventListener('scroll',()=>{
        if(window.scrollY>50){  //when 50px scroll
          navbar.style.backgroundColor="transparent";
        }
        else{}
      })

const showMenu = document.querySelector(".humburger");
const hideMenu = document.querySelector(".hide-menu");

showMenu.addEventListener('click', () => {
    document.querySelector(".mobile-menu-navbar").style.display = "flex";
})
hideMenu.addEventListener('click', () => {
    document.querySelector(".mobile-menu-navbar").style.display = "none";
})