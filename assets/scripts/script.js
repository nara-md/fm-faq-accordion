// Main JavaScript file

document.addEventListener('DOMContentLoaded', function () {
    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.icon img');
            const isActive = answer.classList.contains('active');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active');
            });

            document.querySelectorAll('.faq-question .icon img').forEach(img => {
                img.src = './assets/images/icon-plus.svg';
            });

            // Toggle current answer
            if (!isActive) {
                answer.classList.add('active');
                icon.src = './assets/images/icon-minus.svg';
            }
        });
    });
});
