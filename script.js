let btn = document.querySelector('button');
let screenSize = document.querySelector("#screenSize");
let windowSize = document.querySelector("#windownSize");
let contentSize = document.querySelector("#contentSize");

btn.addEventListener('click', () =>{
    screenSize.innerHTML = `Monitor Height: ${screen.height}px      Monitor Width: ${screen.width}px`;
    windowSize.innerHTML = `Browser window Height: ${window.outerHeight}px      Browser window Width: ${window.outerWidth}px`;
    contentSize.innerHTML = `Browser inside content Height: ${window.innerHeight}px      Browser inside content Width: ${window.innerWidth}px`;
});