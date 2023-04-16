console.log("GDG");

const elem = document.querySelector("#elem");
const show = document.querySelector("#show");
const map = document.querySelector("#map");

show.addEventListener('click', function() {
    elem.classList.remove('hidden');
    });

show.addEventListener('click', function() {
    map.classList.add('hidden');
    });

