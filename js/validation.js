// validation.js
$(document).ready(function() {
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Register Form Validation
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        let name = $('#regName').val().trim();
        let email = $('#regEmail').val().trim();
        let password = $('#regPassword').val();
        let confirmPassword = $('#regConfirmPassword').val();
        let terms = $('#regTerms').is(':checked');

        $('.error-msg').remove();

        if (name === '') {
            showError('#regName', 'Name cannot be empty.');
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            showError('#regEmail', 'Please enter a valid email address.');
            isValid = false;
        }

        if (password.length < 8) {
            showError('#regPassword', 'Password must be at least 8 characters long.');
            isValid = false;
        }

        if (password !== confirmPassword) {
            showError('#regConfirmPassword', 'Passwords do not match.');
            isValid = false;
        }

        if (!terms) {
            showError('#regTerms', 'You must accept the Terms and Conditions.');
            isValid = false;
        }

        if (isValid) {
            window.showToast('Account created successfully!');
            setTimeout(function() {
                window.location.href = 'login.html';
            }, 2000);
        }
    });

    // Login Form Validation
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        let email = $('#loginEmail').val().trim();
        let password = $('#loginPassword').val();

        $('.error-msg').remove();

        if (email === '') {
            showError('#loginEmail', 'Email cannot be empty.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('#loginEmail', 'Please enter a valid email address.');
            isValid = false;
        }

        if (password === '') {
            showError('#loginPassword', 'Password cannot be empty.');
            isValid = false;
        }

        if (isValid) {
            window.showToast('Welcome back to SulamiDev!');
            setTimeout(function() {
                window.location.href = '../index.html';
            }, 2000);
        }
    });

    // Contact Form Validation
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        let name = $('#contactName').val().trim();
        let email = $('#contactEmail').val().trim();
        let subject = $('#contactSubject').val().trim();
        let message = $('#contactMessage').val().trim();

        $('.error-msg').remove();

        if (name === '') {
            showError('#contactName', 'Name is required.');
            isValid = false;
        }
        if (!emailRegex.test(email)) {
            showError('#contactEmail', 'Valid email is required.');
            isValid = false;
        }
        if (subject === '') {
            showError('#contactSubject', 'Subject is required.');
            isValid = false;
        }
        if (message === '') {
            showError('#contactMessage', 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            window.showToast('Message sent successfully!');
            this.reset();
        }
    });

    function showError(selector, message) {
        $(selector).after('<div class="error-msg text-danger mt-1 small">' + message + '</div>');
    }
});
