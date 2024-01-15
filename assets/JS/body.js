let navLine = document.getElementById("nav_line2");
let navMenu = document.querySelectorAll("nav a");
console.log(navMenu);

navMenu.forEach(menu => {
    menu.addEventListener("mouseover", (e) => navIndicator(e.currentTarget));
    menu.addEventListener("mouseout", () => resetNavLine());
});

function navIndicator(e) {
    navLine.style.left = e.offsetLeft - 5 + "px";
    navLine.style.width = e.offsetWidth + 10 + "px";
    navLine.style.top = e.offsetTop + e.offsetHeight + "px";
}

function resetNavLine() {
    // 원래 상태로 돌아가는 코드
    navLine.style.left = "0";
    navLine.style.width = "100%";
    navLine.style.top = "0";
}
