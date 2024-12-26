document.addEventListener("DOMContentLoaded", function () {
    // التحقق من حالة التسجيل
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    const loginPage = document.querySelector("#loginPage");
    const homePage = document.querySelector("#homePage");

    if (userLoggedIn) {
        // إذا كان المستخدم مسجلاً، إظهار الصفحة الرئيسية
        homePage.style.display = "block";
        loginPage.style.display = "none";
    } else {
        // إذا لم يكن المستخدم مسجلاً، إظهار صفحة التسجيل
        homePage.style.display = "none";
        loginPage.style.display = "block";
    }

    // تسجيل الدخول
    const loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            
            // تحقق من المدخلات
            if (email && password) {
                // إرسال البيانات إلى الخادم للتحقق
                fetch("../PHP/login.php", {
                    method: "POST",
                    body: new URLSearchParams({
                        "email": email,
                        "password": password
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // تسجيل الدخول بنجاح
                        sessionStorage.setItem("userLoggedIn", "true");
                        window.location.href = "../HTML/home.html"; // إعادة التوجيه إلى الصفحة الرئيسية
                    } else {
                        alert("فشل في تسجيل الدخول: " + data.message);
                    }
                });
            } else {
                alert("يرجى إدخال جميع الحقول.");
            }
        });
    }
});
