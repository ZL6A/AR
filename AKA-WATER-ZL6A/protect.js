// التحقق من الأيبي قبل السماح بالوصول للصفحة
const allowedIP = "153.94.65.127";

function getUserIP() {
    // هنا يجب إضافة الطريقة للحصول على الأيبي من الخادم أو المتصفح
    // مثال افتراضي:
    return "153.94.65.127";  // يمكنك استبدال هذه القيمة باستخراج الأيبي من الخادم
}

window.onload = function() {
    let userIP = getUserIP();
    
    if (userIP !== allowedIP) {
        alert("أنت غير مخول للوصول إلى هذه الصفحة!");
        window.location.href = "../index.html";  // إعادة توجيه إلى الصفحة الرئيسية
    }
};
