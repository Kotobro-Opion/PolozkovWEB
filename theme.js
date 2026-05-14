

/* Находим кнопку */
const button =
document.getElementById("theme-toggle");

/* Проверяем сохраненную тему */
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-theme");

    button.textContent = "☀️";
}

/* Нажатие на кнопку */
button.onclick = function(){

    /* Переключаем класс */
    document.body.classList.toggle("light-theme");

    /* Если светлая тема */
    if(document.body.classList.contains("light-theme")){

        button.textContent = "☀️";

        localStorage.setItem("theme", "light");
    }

    /* Если темная тема */
    else{

        button.textContent = "🌙";

        localStorage.setItem("theme", "dark");
    }
}