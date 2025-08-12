document.addEventListener('DOMContentLoaded', function() {
    var btnComecarAgora = document.querySelector('.btn');

    btnComecarAgora.addEventListener('click', function(event) {
        event.preventDefault();
        var sectionVideos = document.querySelector('#videos');
        var targetPosition = sectionVideos.offsetTop - 120; 
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
