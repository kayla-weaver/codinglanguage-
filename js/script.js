window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResults();
    const sparkle = document.getElementById("sprakle").value;
    const creepy= document.getElementById("creepy").value;
    const coffee = document.getElementById("coffee").value;
    const question = document.getElementById("question").value;
    const other = document.getElementById("other").value;
    const yes= document.querySelector(optionValue#yes).value;
    if ("spakle"=== yes)
    document.getElementById("Ruby").removeAttribute("class");
  }};
  
  window.addEventListener("load", function() {
    document.getElementById("select-form").addEventListener("submit", handleSelect);
  });
  function hideResults(){
    document.getElementById("JavaScript").setAttribute("class","hidden");
    document.getElementById("Python").setAttribute("class","hidden");
    document.getElementById("Ruby").setAttribute("class","hidden");
  }