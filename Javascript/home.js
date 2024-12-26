document.addEventListener("DOMContentLoaded", function () {
    // التحقق من تسجيل الدخول
    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
        // إذا لم يكن التوكن موجودًا، إعادة التوجيه إلى صفحة التسجيل
        window.location.href = "../HTML/login.html";
    }

    // إظهار البيانات الخاصة بالمستخدم بعد التحقق من التوكن
    const welcomeMessage = document.querySelector("#welcomeMessage");
    welcomeMessage.innerText = `مرحبًا بك في ZL6A E-SPORTS!`;

    // تسجيل الخروج
    const logoutButton = document.querySelector("#logoutButton");
    logoutButton.addEventListener("click", function () {
        // مسح التوكن عند تسجيل الخروج
        localStorage.removeItem("userToken");
        window.location.href = "../HTML/login.html";
    });
});
