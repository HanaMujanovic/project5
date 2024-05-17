
    let level = 1;
    let score = 0;
    const maxLevels = 3;

    const images = document.querySelectorAll('.image');
    const resultDiv = document.getElementById('result');
    const nextLevelBtn = document.getElementById('next-level');

    // Funkcija za prikazivanje rezultata
    function showResult(message) {
        resultDiv.textContent = message;
    }

    // Funkcija za prikazivanje slika za trenutni level
    function showImagesForLevel(level) {
        images.forEach(image => {
            const isHidden = image.dataset.level && parseInt(image.dataset.level) !== level;
            image.style.display = isHidden ? 'none' : 'inline-block';
        });
    }

    // Funkcija za pokretanje sledećeg levela
    function nextLevel() {
        if (level < maxLevels) {
            level++;
            showImagesForLevel(level);
            resultDiv.textContent = '';
        } else {
            showResult(`Game Over! Your score is ${score}.`);
            nextLevelBtn.style.display = 'none';
        }
    }

    // Dodavanje eventa na dugme za sledeći level
    nextLevelBtn.addEventListener('click', nextLevel);

    // Dodavanje eventa na klik na svaku sliku
    images.forEach(image => {
        image.addEventListener('click', () => {
            const isCorrect = image.dataset.intruder === 'true';
            if (isCorrect) {
                score++;
                showResult('Correct! You found the intruder!');
            } else {
                showResult('Wrong! Try again.');
            }
            image.style.display = 'none';
        });
    });

    // Prikazivanje slika za prvi level
    showImagesForLevel(level);
