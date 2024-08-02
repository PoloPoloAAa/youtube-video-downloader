document.getElementById('downloadBtn').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    var message = document.getElementById('message');

    if (url === '') {
        message.textContent = 'Veuillez entrer une URL.';
        return;
    }

    // Simule le téléchargement en vérifiant si l'URL est une URL YouTube valide
    if (isValidYouTubeUrl(url)) {
        message.textContent = 'Le téléchargement va commencer... (Simulation)';
        message.style.color = 'green';
    } else {
        message.textContent = 'Veuillez entrer une URL YouTube valide.';
        message.style.color = 'red';
    }
});

function isValidYouTubeUrl(url) {
    var regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
}
