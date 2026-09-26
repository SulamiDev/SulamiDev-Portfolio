// ajax.js
$(document).ready(function() {
    
    // AJAX for Project Details Modal
    $('.view-project-btn').on('click', function() {
        $('#projectModalBody').html('<div class="text-center py-4"><div class="spinner-border text-dark" role="status"></div></div>');
        
        // Simulating AJAX call to a local HTML file
        $.ajax({
            url: '../data/project-details.html',
            method: 'GET',
            success: function(response) {
                setTimeout(function() {
                    $('#projectModalBody').html(response);
                }, 500); // slight delay to show loading animation
            },
            error: function() {
                $('#projectModalBody').html('<p class="text-danger py-4">Failed to load project details. Note: AJAX requires a local server to run.</p>');
            }
        });
    });

    // AJAX for Service Details Modal
    $('.learn-service-btn').on('click', function() {
        $('#serviceModalBody').html('<div class="text-center py-4"><div class="spinner-border text-dark" role="status"></div></div>');
        
        $.ajax({
            url: '../data/service-details.html',
            method: 'GET',
            success: function(response) {
                setTimeout(function() {
                    $('#serviceModalBody').html(response);
                }, 500);
            },
            error: function() {
                $('#serviceModalBody').html('<p class="text-danger py-4">Failed to load service details. Note: AJAX requires a local server to run.</p>');
            }
        });
    });

});
