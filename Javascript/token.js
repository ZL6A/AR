document.addEventListener("DOMContentLoaded", function () {
    // التحقق من وجود توكن في الـ localStorage عند تحميل الصفحة
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
        // إذا كان التوكن موجودًا، يمكن السماح بالدخول
        console.log("تم التحقق من التوكن بنجاح.");
    } else {
        // إذا لم يكن التوكن موجودًا، إعادة التوجيه إلى صفحة التسجيل
        window.location.href = "../HTML/login.html";
    }
});
