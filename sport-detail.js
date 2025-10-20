// --- BASE DE DONNÉES DES SPORTS ---
// Remplissez cet objet avec vos 9 sports.
const sportsData = {
    foot: {
        title: 'Beach Soccer',
        image: 'images/foot.png',
        description: 'Le football se réinvente sur le sable chaud. Technique, agilité et acrobaties sont les clés de ce tournoi rapide et spectaculaire sur terrain sablonneux.',
        rules: [
            '16 équipes de 6 (5 titulaires)'
        ]
    },
    basket: {
        title: 'Beach Basket',
        image: 'images/basket.png',
        description: 'Oubliez le parquet ! Le Beach Basket se joue sur le sable, où les appuis sont fuyants et le jeu se concentre sur les passes rapides et le spectacle. Un 4v4 intense sous le soleil.',
        rules: [
            '8 équipes de 5 (4 titulaires)'
        ]
    },
    hand: {
        title: 'Handball', // (En supposant que c'est du Beach Handball)
        image: 'images/hand.png',
        description: 'Dynamique, rapide et acrobatique. Le Beach Handball se joue sur le sable pour un spectacle garanti. Tirs en "360" et "kung-fu" (double-points) sont attendus !',
        rules: [
            '6 équipes de 6 (5 titulaires)'
        ]
    },
    lutte: {
        title: 'Lutte',
        image: 'images/lutte.png',
        description: 'Retour aux origines de la force. Une épreuve de puissance, de technique et d\'équilibre où les combattants s\'affrontent directement sur le sable du désert.',
        rules: [
            'Masculin : 10 participants - 4 terrains',
            'Féminin : 6 participantes - 2 terrains'
        ]
    },
    petanque: {
        title: 'Petanque',
        image: 'images/petanque.png',
        description: 'Précision et stratégie sont de mise. Le terrain de sable fin offre un défi unique. Pointez ou tirez, mais visez juste pour rapprocher vos boules du cochonnet.',
        rules: [
            '32 équipes de 2'
        ]
    },
    rugby: {
        title: 'Beach Rugby',
        image: 'images/rugby.png',
        description: 'Pas de mêlées, juste du jeu rapide, des passes vives et des essais spectaculaires. Le Beach Rugby est un jeu d\'appuis et de vitesse sur un terrain qui pardonne peu.',
        rules: [
            'Masculin : 8 équipes de 10 (7 titulaires)',
            'Féminin : 3 équipes de 10 (7 titulaires)'
        ]
    },
    sandboard: {
        title: 'Sandboard',
        image: 'images/snow.png',
        description: 'Glissez sur les plus hautes dunes. Une planche, de la vitesse et une vue imprenable. L\'épreuve consiste en une descente chronométrée sur la "Grande Dune" (300m de dénivelé).',
        rules: [
            '20 participants', '1 piste'
        ]
    },
    trail: {
        title: 'Trail',
        image: 'images/trail.png',
        description: 'Testez votre endurance contre les éléments. Un parcours exigeant de 10km à travers les dunes et les plateaux rocailleux. Gestion de l\'effort et mental d\'acier requis.',
        rules: [
            '1 boucle de 10 km'
        ]
    },
    volley: {
        title: 'Beach Volley',
        image: 'images/volley.png',
        description: 'Le sport de plage par excellence. Smashes, blocs et défenses s\'enchaînent sur le sable chaud. Une épreuve d\'équipe où la communication et l\'agilité sont reines.',
        rules: [
            '16 équipes de 4 (3 titulaires)'
        ]
    }
};


// --- LOGIQUE D'AFFICHAGE ---

document.addEventListener('DOMContentLoaded', () => {

    // 1. Lire le paramètre 'id' dans l'URL
    const params = new URLSearchParams(window.location.search);
    const sportId = params.get('id'); // ex: "sandboarding"

    // 2. Trouver les données correspondantes
    const sportInfo = sportsData[sportId];

    // 3. Sélectionner les éléments HTML à remplir
    const titleElement = document.getElementById('sport-title');
    const imageElement = document.getElementById('sport-image');
    const descriptionElement = document.getElementById('sport-description');
    const rulesListElement = document.getElementById('sport-rules');

    // 4. Vérifier si le sport existe
    if (sportInfo) {
        // 5. Remplir la page avec les données
        
        document.title = `${sportInfo.title} - TED 2026`;
        
        titleElement.textContent = sportInfo.title;
        imageElement.src = sportInfo.image;
        imageElement.alt = sportInfo.title;
        descriptionElement.textContent = sportInfo.description;

        rulesListElement.innerHTML = ''; // Vider la liste
        sportInfo.rules.forEach(ruleText => {
            const li = document.createElement('li');
            li.textContent = ruleText;
            rulesListElement.appendChild(li);
        });

    } else {
        // Si l'ID est inconnu (ex: sport.html?id=pizza)
        document.title = 'Erreur - TED 2026';
        titleElement.textContent = 'Épreuve inconnue';
        descriptionElement.textContent = 'Ce sport ne fait pas partie du tournoi. Veuillez retourner à la page d\'accueil.';
        imageElement.style.display = 'none'; // Cacher l'image vide
    }
});