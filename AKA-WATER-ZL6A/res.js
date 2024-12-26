// res.js
window.onload = function() {
    // تحقق مما إذا كان هناك رسالة عامة أو تحديثات مضافة
    fetch('/path/to/message.json')  // تأكد من تحديد المسار الصحيح للملف
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            showMessage(data.message); // إذا كان هناك رسالة عامة
        }
        if (data.update) {
            showUpdate(data.update);  // إذا كان هناك تحديث
        }
    })
    .catch(error => console.error('خطأ في تحميل الرسائل أو التحديثات:', error));
};

function showMessage(message) {
    // إظهار الرسالة العامة على الصفحة
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('general-message');
    messageContainer.textContent = message;
    document.body.prepend(messageContainer);
}

function showUpdate(updateMessage) {
    // إظهار التحديث على الصفحة
    const updateContainer = document.createElement('div');
    updateContainer.classList.add('update-message');
    updateContainer.textContent = updateMessage;
    document.body.prepend(updateContainer);
}
