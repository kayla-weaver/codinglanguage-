window.onload = function() {
    const form = document.querySelector("form");
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResults();
    const sparkle = document.getElementById("sprakle").value;
    const creepy= document.getElementById("creepy").value;
    const coffee = document.getElementById("coffee").value;
    const question = document.getElementById("question").value;
    const other = document.getElementById("other").value;
    const selectElement=document.getElementById("sparkles");
    const yes= document.getElementById('input').value;
    if (spakle= yes) {
    document.getElementById("Ruby").removeAttribute("class");
    }}
  function hideResults(){
    document.getElementById("JavaScript").setAttribute("class","hidden");
    document.getElementById("Python").setAttribute("class","hidden");
    document.getElementById("Ruby").setAttribute("class","hidden");
  }};