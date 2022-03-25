 let lightBoxContainer = document.getElementById("lightBoxContainer");
//  close btn for nav
 let toglleNavList = document.getElementById("toglleNavList");
//  nav togle bottom
 let navLinks = document.getElementById("navLinks");


//  open iframe (lightBoxContainer)
 document.getElementById("iframeLink").addEventListener("click",() => {
    lightBoxContainer.style.display="flex"
})

// close iframe (lightBoxContainer) //click oust side iframe close
lightBoxContainer.addEventListener("click",() => {
    lightBoxContainer.style.display="none"
    
})

// this for togle btoom  sidbar links in responsive
toglleNavList.addEventListener("click",() => {
 
    navLinks.classList.toggle("active")
    nav__menu.classList.toggle("active")
})

// close iframe (lightBoxContainer) //on scroll iframe close
window.addEventListener('scroll', () => {
    lightBoxContainer.style.display="none"
});
