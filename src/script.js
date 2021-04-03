var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen"); 
  window.setTimeout(function(){

    // Move to a new location or you can do something else
    window.location.replace("./character.html");

}, 1000);
  
}