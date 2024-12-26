<?php
session_start();

// تدمير الجلسة للخروج
session_destroy();

// إعادة التوجيه إلى صفحة التسجيل
header('Location: login.php');
exit;
?>
