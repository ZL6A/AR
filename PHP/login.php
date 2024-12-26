<?php
session_start();
include 'config.php';  // تضمين الاتصال بقاعدة البيانات

// التحقق من الأيبي
$allowed_ip = '153.94.65.127';  // الأيبي المسموح به
$user_ip = $_SERVER['REMOTE_ADDR'];

if ($user_ip !== $allowed_ip) {
    die("لا يمكنك الوصول إلى هذه الصفحة!");
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // الحصول على بيانات النموذج
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    
    // التحقق من البيانات المدخلة
    if (empty($email) || empty($password)) {
        echo "جميع الحقول مطلوبة!";
        exit;
    }

    // التحقق من وجود المستخدم في قاعدة البيانات
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        // تخزين البيانات في الجلسة
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_email'] = $user['email'];

        // إعادة التوجيه إلى الصفحة الرئيسية إذا كان المستخدم مسجلًا
        header('Location: ../HTML/home.html');
        exit;
    } else {
        echo "البريد الإلكتروني أو كلمة المرور غير صحيحة!";
    }
}
?>
