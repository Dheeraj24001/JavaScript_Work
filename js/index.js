// var r = document.querySelector('#root');
// console.log(r);
// var card = document.createElement("div");
// // card.classList.add("card");
// card.setAttribute("class", "card");

// r.appendChild(card);

// var image = document.createElement("img");
// image.src= "images/jacob.jpg";
// image.alt="pic";
// image.style.height="200px";
// image.style.width="200px";
// card.appendChild(image);


// var email = document.createElement("input");
// email.type="email";
// email.placeholder="email address";
// card.appendChild(email);
// var anchor = document.createElement("a");
// anchor.href="#";
// var button = document.createElement("button");
// button.innerHTML = "Click Here";
// anchor.appendChild(button);

function loadJSON(file, callback){
    var ajax = new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET", file, true);
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4 && ajax.status===200){
            callback(ajax.responseText);
        }
    }
    ajax.send();
}

loadJSON("JSON_Data/data.json", function(text){
    var d = JSON.parse(text);
    detail(d.details);
    other(d.multipleData);
});
var root = document.getElementById("root");
function detail(cse){
    var n = document.createElement("h1");
    n.setAttribute("class", "name");
    n.textContent=cse.name;
    root.appendChild(n);

    var n2 = document.createElement("h1");
    n2.setAttribute("class", "phone");
    n2.textContent=cse.mobile;
    root.appendChild(n2)
}
// loadJSON("https://jsonplaceholder.typicode.com/posts", function(text){
//     var da = JSON.parse(text);
//     console.log(da[0]);
// });

function other(r){
    var ul = document.createElement("ul");
    root.appendChild(ul);
    for(let i=0;i<r.length;i++){
        var li = document.createElement("li");
        li.textContent=r[i].name;
        ul.appendChild(li);
        var li1 = document.createElement("li");
        li1.textContent=r[i].mobile;
        ul.appendChild(li1);
    }
    
}