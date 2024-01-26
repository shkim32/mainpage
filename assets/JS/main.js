
// 네비게이션바 밑줄 효과
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

// 네비게이션바 상단고정
document.addEventListener("DOMContentLoaded", function() {
    let nav = document.getElementById("nav");
    let banner = document.getElementById("Banner");
    let navTop = banner.offsetTop + banner.offsetHeight;
    let body = document.body;

    window.addEventListener("scroll", function() {
        if (window.scrollY >= navTop) {
            nav.classList.add("fixed");
            body.style.paddingTop = "160px";
        } else {
            nav.classList.remove("fixed");
            body.style.paddingTop = "0";
        }
    });
});

// 네이게이션바 스크롤 이동
let moveBt = document.querySelectorAll(".moveBt");
let moveLo = document.querySelectorAll(".moveLo");
let skillsTop = moveLo[0].offsetTop;
let worksTop = moveLo[1].offsetTop;
let contactTop = moveLo[2].offsetTop;

moveBt[0].onclick = function(){
    window.scroll({top:skillsTop, behavior:'smooth'})
}
moveBt[1].onclick = function(){
    window.scroll({top:worksTop, behavior:'smooth'})
}
moveBt[2].onclick = function(){
    window.scroll({top:contactTop, behavior:'smooth'})
}
