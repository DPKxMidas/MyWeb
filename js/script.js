const siteName = "Ẩm thực Việt Nam";
let topic = "Khám phá hương vị truyền thống và văn hóa món ăn Việt";
let imageCount = 9;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);

const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
    mainTitle.textContent = "Ẩm thực Việt Nam !";
    welcomeText.textContent =
        "Chào mừng bạn đến với hành trình khám phá các món ăn Việt Nam.";
}

const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
    helloBtn.addEventListener("click", function () {
        helloResult.textContent =
            "Cảm ơn bạn đã ghé thăm website Ẩm thực Việt Nam!";
    });
}
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {

    toggleAboutBtn.addEventListener("click", function () {

        aboutContent.classList.toggle("hidden");

    });

}
