function helloConsole () {
  console.log("Hello, World!");
}

function helloPopup () {
  alert("Hello, World!");
}

function helloBrowser () {
  var p = document.getElementById("helloBrowser");
  p.innerHTML = "Hello, World!";
}

function helloStranger () {
  var username = prompt("Enter Your Name");
  var greeting = document.getElementById("helloStranger");
  greeting.innerHTML = "Hello, " + username + "!";
}
