//bật tắt menu

const menuBtn = document.querySelector(".button-click");
console.log(menuBtn);
const headerNav = document.querySelector(".header__navbar");
console.log(headerNav);


menuBtn.addEventListener("click" , function() {
    headerNav.classList.toggle("active");
});

// headerNav.style.display = "block";