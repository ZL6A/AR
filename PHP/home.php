<?php
session_start();

// التحقق إذا كان المستخدم قد سجل الدخول
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');  // إعادة التوجيه إلى صفحة التسجيل إذا لم يكن مسجلًا
    exit;
}

// عرض المحتوى إذا كان المستخدم مسجلًا
echo "<h1>مرحبا، " . $_SESSION['user_email'] . "!</h1>";
?>
