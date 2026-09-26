// main.js
$(document).ready(function() {
    // Scroll Animation (Fade Up)
    function checkVisibility() {
        $('.fade-up').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 50) {
                $(this).addClass('visible');
            }
        });
    }

    // Trigger on scroll and on load
    $(window).on('scroll', checkVisibility);
    checkVisibility();

    // Show Toast Notification helper function
    window.showToast = function(message) {
        var toastHTML = `
            <div class="toast align-items-center text-white bg-dark border-0 mb-3" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="fas fa-check-circle me-2"></i> ${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        `;
        $('.toast-container').append(toastHTML);
        var newToast = $('.toast-container .toast').last();
        var toastInstance = new bootstrap.Toast(newToast[0], { delay: 3000 });
        toastInstance.show();
        
        newToast.on('hidden.bs.toast', function () {
            $(this).remove();
        });
    };
});
