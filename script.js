document.getElementById('play-reveal-button').addEventListener('click', () => {
    // Play the background audio
    const audio = document.getElementById('background-audio');
    audio.play();

    // Reveal the hidden message
    const message = document.getElementById('hidden-message');
    message.style.display = 'block';

    // Hide the button after clicking
    document.getElementById('play-reveal-button').style.display = 'none';
});
