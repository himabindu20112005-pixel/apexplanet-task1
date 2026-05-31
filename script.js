function showMessage() {
    alert("Welcome to CodeMaster Academy!");
}

document.addEventListener("DOMContentLoaded", function () {

    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }

    });

});