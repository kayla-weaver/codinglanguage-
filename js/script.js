window.onload = function () {
  let form = document.querySelector("form#select-form");
  // console.log("form", form);
  form.onsubmit = function (event) {
    // hideResults();
    console.log("on submit working")
    const sparkle = document.getElementById("sparkle").value;
    const creepy = document.getElementById("creepy").value;
    const coffee = document.getElementById("coffee").value;
    const question = document.getElementById("question").value;
    const other = document.getElementById("other").value;
    // const selectElement=document.getElementById("sparkle");
    // const yes = document.getElementById("yes").value;
    // console.log(yes);
    // const no = document.getElementById("no").value;
    let ruby = document.getElementById("Ruby");
    ruby.setAttribute("class", "hidden");
    let javascript = document.getElementById("JavaScript");
    javascript.setAttribute("class", "hidden");
    let python = document.getElementById("Python");
    python.setAttribute("class", "hidden");
    let yes= "yes";
    let no = "no";
    if (
      sparkle === yes &&
      creepy === yes &&
      coffee === yes &&
      question === yes &&
      other === yes
    ) {
      ruby.removeAttribute("class");
    } else if (
      sparkle === no &&
      creepy === no &&
      coffee === no &&
      question === no &&
      other === no
    ) {
      javascript.removeAttribute("class");
    } else {
      python.removeAttribute("class");
    }
    event.preventDefault();
  };
  // function hideResults(){
};
