console.log("Hello");

const image = document.getElementById("image");
const file = document.getElementById("file");
const box = document.getElementById("box");

const elem = document.querySelector("#elem");
const show = document.querySelector("#show");
const map = document.querySelector("#map");

const clo =document.querySelector("#clo");

const back = document.querySelector("#back");


clo.addEventListener('click', function() {
    box.classList.add('hidden');
    box.classList.remove('img--drop');
    console.log("hey");
});

file.addEventListener('change', function(){
    image.src = URL.createObjectURL(file.files[0]);
    box.classList.remove("hidden");
});

file.addEventListener('click', function(){
    box.classList.remove("hidden");
    box.classList.add('img--drop');
});

show.addEventListener('click', function() {
    elem.classList.remove('hidden');
    });

show.addEventListener('click', function() {
    map.classList.add('hidden');
    });

show.addEventListener('click', function() {
    box.classList.add("hidden");
    });

back.addEventListener('click', function(){
    elem.classList.add("hidden");
    map.classList.remove('hidden');
    box.classList.remove("hidden");
    });

