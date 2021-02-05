fetch("JSON_Data/data.json").then(res=>{return res.json()}).then(d=>{detail(d.details);
    other(d.multipleData);})
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