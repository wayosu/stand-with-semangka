// when the button is pressed then add an element img
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const box = document.querySelector(".box");
    const totalClick = document.getElementById("total-click");
    let clickCount = 0;

    button.addEventListener("click", function () {
        const img = document.createElement("img");
        img.src = "semangka.png";
        img.classList.add("semangka");
        document.body.appendChild(img);

         // Increment the click count
         clickCount++;
         totalClick.textContent = clickCount;
        
        img.addEventListener("animationend", function () {
            document.body.removeChild(img);
        });
        box.appendChild(img);
    });
});