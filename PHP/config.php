<?php
// إعدادات الاتصال بقاعدة البيانات
$host = 'localhost'; // اسم السيرفر
$dbname = 'login';   // اسم قاعدة البيانات
$username = 'root';  // اسم المستخدم
$password = '';      // كلمة المرور (عادةً ما تكون فارغة في بيئة محلية)

// إنشاء الاتصال بقاعدة البيانات
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("فشل الاتصال بقاعدة البيانات: " . $e->getMessage());
}
?>
