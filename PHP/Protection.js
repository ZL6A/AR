document.addEventListener("DOMContentLoaded", function () {
    // حماية ضد XSS (Cross-Site Scripting)
    document.querySelector("form").addEventListener("submit", function (e) {
        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            if (input.value.includes("<") || input.value.includes(">")) {
                alert("لا يمكنك إدخال كود HTML في الحقول.");
                e.preventDefault();
            }
        });
    });
});
