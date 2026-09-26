// main.js
document.addEventListener("DOMContentLoaded", function() {
    // Scroll Animation (Fade Up) using Vanilla JS IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-up');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for very old browsers
        fadeElements.forEach(el => el.classList.add('visible'));
    }

    // Show Toast Notification helper function
    window.showToast = function(message) {
        var toastHTML = 
            <div class="toast align-items-center text-white bg-dark border-0 mb-3" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="fas fa-check-circle me-2"></i>  + message + 
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        ;
        
        var container = document.querySelector('.toast-container');
        if (container) {
            container.insertAdjacentHTML('beforeend', toastHTML);
            var toasts = container.querySelectorAll('.toast');
            var newToast = toasts[toasts.length - 1];
            
            if (typeof bootstrap !== 'undefined') {
                var toastInstance = new bootstrap.Toast(newToast, { delay: 3000 });
                toastInstance.show();
            } else {
                newToast.classList.add('show');
                setTimeout(() => newToast.remove(), 3000);
            }
            
            newToast.addEventListener('hidden.bs.toast', function () {
                newToast.remove();
            });
        }
    };
});
