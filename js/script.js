var isOn = true;

function toggleSidebar() {
  if(isOn)
  {
    document.getElementById("menuSidebar").style.width = "0%";
    document.getElementById("menuSidebar").style.borderRightStyle = "none";
    document.getElementById("main").style.left = "0%";
    document.getElementById("main").style.width = "100%";
    document.getElementById("sidebarToggle").style.marginLeft = "0%";
    isOn = false;
  } else {
    document.getElementById("menuSidebar").style.width = "20%";
    document.getElementById("menuSidebar").style.borderRightStyle = "solid";
    document.getElementById("main").style.left = "20%";
    document.getElementById("main").style.width = "80%";
    document.getElementById("sidebarToggle").style.marginLeft = "20%";
    isOn = true;
  }
}


function scrollToElement(elementID) {
  const element = document.getElementById(elementID);
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
