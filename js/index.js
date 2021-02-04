var r = document.querySelector('#root');
console.log(r);
var card = document.createElement("div");
// card.classList.add("card");
card.setAttribute("class", "card");

r.appendChild(card);

var image = document.createElement("img");
image.src= "images/jacob.jpg";
image.alt="pic";
image.style.height="200px";
image.style.width="200px";
card.appendChild(image);


var email = document.createElement("input");
email.type="email";
email.placeholder="email address";
card.appendChild(email);
var anchor = document.createElement("a");
anchor.href="#";
var button = document.createElement("button");
button.innerHTML = "Click Here";
anchor.appendChild(button);