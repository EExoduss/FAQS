let A1 = document.getElementById("A1");
let A2 = document.getElementById("A2");
let A3 = document.getElementById("A3");
let A4 = document.getElementById("A4");

let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");

let minus1 = document.getElementById("minus1");
let minus2 = document.getElementById("minus2");
let minus3 = document.getElementById("minus3");
let minus4 = document.getElementById("minus4");


plus1.addEventListener('click', function(){
    plus1.style.display = "none";
    minus1.style.display = "block";
    A1.style.height = "100px";
});

plus2.addEventListener('click', function(){
    plus2.style.display = "none";
    minus2.style.display = "block";
    A2.style.height = "100px";
});
plus3.addEventListener('click', function(){
    plus3.style.display = "none";
    minus3.style.display = "block";
    A3.style.height = "100px";
});
plus4.addEventListener('click', function(){
    plus4.style.display = "none";
    minus4.style.display = "block";
    A4.style.height = "120px";
});




minus1.addEventListener('click', function(){
    minus1.style.display = "none";
    plus1.style.display = "block";
    A1.style.height = "0px";
});
minus2.addEventListener('click', function(){
    minus2.style.display = "none";
    plus2.style.display = "block";
    A2.style.height = "0px";
});
minus3.addEventListener('click', function(){
    minus3.style.display = "none";
    plus3.style.display = "block";
    A3.style.height = "0px";
});
minus4.addEventListener('click', function(){
    minus4.style.display = "none";
    plus4.style.display = "block";
    A4.style.height = "0px";
});