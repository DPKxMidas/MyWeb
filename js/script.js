// Console

const siteName = "Ẩm thực Việt Nam";

let topic = "Khám phá món ăn truyền thống";

let imageCount = 5;

let isReady = true;



console.log("Website:",siteName);

console.log("Chủ đề:",topic);

console.log("Số ảnh:",imageCount);

console.log("Đã sẵn sàng dùng JS?",isReady);

console.log("Kiểu dữ liệu:",typeof topic);







// Đổi nội dung


const mainTitle =
document.getElementById("mainTitle");


const welcomeText =
document.getElementById("welcomeText");



if(mainTitle && welcomeText){


mainTitle.textContent =
"Ẩm thực Việt Nam ";


welcomeText.textContent =
"Chào mừng bạn khám phá món ngon Việt Nam";


}








// Nút lời chào


const helloBtn =
document.getElementById("helloBtn");


const helloResult =
document.getElementById("helloResult");



if(helloBtn && helloResult){


helloBtn.addEventListener("click",function(){


helloResult.textContent =
"Cảm ơn bạn đã ghé thăm website Ẩm thực Việt Nam!";


});


}








// Ẩn hiện giới thiệu


const toggleAboutBtn =
document.getElementById("toggleAboutBtn");


const aboutContent =
document.getElementById("aboutContent");



if(toggleAboutBtn && aboutContent){


toggleAboutBtn.addEventListener("click",function(){


aboutContent.classList.toggle("hidden");


});


}








// MENU MỞ ĐÓNG


const menuToggle =
document.getElementById("menuToggle");


const mainMenu =
document.getElementById("mainMenu");



if(menuToggle && mainMenu){



menuToggle.addEventListener("click",function(){



mainMenu.classList.toggle("active");




if(mainMenu.classList.contains("active")){


menuToggle.textContent =
"Đóng menu";


}else{


menuToggle.textContent =
"☰ Menu";


}



});







// click link tự đóng menu


const links =
mainMenu.querySelectorAll("a");



links.forEach(function(link){



link.addEventListener("click",function(){



mainMenu.classList.remove("active");


menuToggle.textContent =
"☰ Menu";


});



});



}
// Đổi giao diện

const themeSelect =
document.getElementById("themeSelect");


if(themeSelect){


themeSelect.addEventListener("change",function(){


document.body.classList.remove(
"dark-mode",
"warm-mode"
);



if(themeSelect.value !== ""){


document.body.classList.add(
themeSelect.value
);


}



});


}
