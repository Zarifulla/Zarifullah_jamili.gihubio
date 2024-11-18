function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


var icon=document.getElementById('icons');
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src= "./assets/sun.png"
  }

    else{
    icon.src="./assets/moon.png";
  }
}
var icons=document.getElementById('icon');
icons.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icons.src= "./assets/sun.png"
  }

    else{
    icons.src="./assets/moon.png";
  }
}
