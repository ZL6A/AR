document.getElementById("sendGeneralMessageBtn").onclick = function() {
    let message = document.getElementById("generalMessageInput").value;
    if (message.trim() !== "") {
        fetch('message.json', {  // تأكد من المسار الصحيح
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            alert("تم إرسال الرسالة العامة!");
            document.getElementById("generalMessageInput").value = "";
        })
        .catch(error => console.error('خطأ في إرسال الرسالة:', error));
    } else {
        alert("يرجى إدخال رسالة أولاً.");
    }
};

document.getElementById("sendUpdateMessageBtn").onclick = function() {
    let updateMessage = document.getElementById("updateMessageInput").value;
    if (updateMessage.trim() !== "") {
        fetch('/path/to/message.json', {  // تأكد من المسار الصحيح
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ update: updateMessage })
        })
        .then(response => response.json())
        .then(data => {
            alert("تم إرسال التحديث!");
            document.getElementById("updateMessageInput").value = "";
        })
        .catch(error => console.error('خطأ في إرسال التحديث:', error));
    } else {
        alert("يرجى إدخال تحديث أولاً.");
    }
};
