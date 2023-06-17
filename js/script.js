function handleSelect(event) {
    event.preventDefault();
    const selection = document.getElementById("sprakle").value;
    const selection = document.getElementById("creepy").value;
    const selection = document.getElementById("coffee").value;
    const selection = document.getElementById("question").value;
    const selection = document.getElementById("other").value;
  }
  
  window.addEventListener("load", function() {
    document.getElementById("select-form").addEventListener("submit", handleSelect);
  });