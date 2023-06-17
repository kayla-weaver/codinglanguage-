window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResults();
    const selection = document.getElementById("sprakle").value;
    const selection = document.getElementById("creepy").value;
    const selection = document.getElementById("coffee").value;
    const selection = document.getElementById("question").value;
    const selection = document.getElementById("other").value;
    if ("spakle"=== optionvalue"yes" && "creepy"=== optionalvalue"no" && "coffee" === optionvalue"no" && "question"=== optionvalue "no"  && "other"=== optionalvalue"yes")
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