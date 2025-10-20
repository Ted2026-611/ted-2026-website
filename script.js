document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('main-header');
    
    // Devient collant 100px avant d'atteindre le bas de la vidéo
    const stickyThreshold = window.innerHeight - 100; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > stickyThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // 1. Sélectionner la vidéo
    const video = document.getElementById('bg-video');

    if (video) { // S'assurer que la vidéo existe sur cette page
      
        // 2. Tenter de la lancer
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // L'autoplay a fonctionné (ou le JS l'a forcé)
                console.log("Vidéo en arrière-plan lancée.");
            })
            .catch(error => {
                // L'autoplay a été bloqué par le navigateur.
                console.error("Le navigateur a bloqué la lecture auto de la vidéo :", error);
                // Sur certains navigateurs, il faut une interaction de l'utilisateur.
                // Mais comme elle est 'muted', ce code devrait suffire.
            });
        }
    }

});