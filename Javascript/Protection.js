// حماية ضد XSS (Cross-Site Scripting)
document.addEventListener("DOMContentLoaded", function () {
    // فحص المدخلات لمنع HTML injection
    document.querySelector("form").addEventListener("submit", function (e) {
        let inputs = document.querySelectorAll("input, textarea");
        inputs.forEach(input => {
            if (input.value.includes("<") || input.value.includes(">")) {
                alert("لا يمكنك إدخال كود HTML في الحقول.");
                e.preventDefault();
            }
        });
    });

    // حماية ضد CSRF (Cross-Site Request Forgery)
    // سيتم إضافة توكن خاص عند إرسال أي طلب
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const allForms = document.querySelectorAll("form");
    allForms.forEach(form => {
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = '_csrf';
        tokenInput.value = csrfToken;
        form.appendChild(tokenInput);
    });
});
