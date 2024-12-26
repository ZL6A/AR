<?php
// إعداد الاتصال بقاعدة البيانات
$db = new PDO('sqlite:../Databases/login.db');

// إنشاء الجدول إذا لم يكن موجوداً
$db->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
)");

// التحقق من وجود المدخلات من نموذج التسجيل
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على البيانات من النموذج
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // تشفير كلمة المرور

    // التحقق من أن المستخدم غير موجود بالفعل
    $stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user) {
        echo "اسم المستخدم موجود بالفعل.";
    } else {
        // إدخال البيانات في قاعدة البيانات
        $stmt = $db->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        if ($stmt->execute([$username, $password])) {
            echo "تم التسجيل بنجاح!";
            // إعادة التوجيه بعد التسجيل الناجح إلى صفحة الدخول أو الصفحة الرئيسية
            header("Location: ../HTML/home.html");
            exit();
        } else {
            echo "حدث خطأ أثناء التسجيل. يرجى المحاولة لاحقًا.";
        }
    }
}
?>
