// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('theVideo');
    video.play().then(() => {
        console.log('Video is playing');
    }).catch(error => {
        console.error('Error attempting to play the video:', error);
    });
});
