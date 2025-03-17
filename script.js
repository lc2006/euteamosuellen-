function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');
    
    document.getElementById(sectionId).style.display = 'block';
}
function startHeartRain() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 200); // Faz os corações caírem em sequência
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Define posição aleatória na tela
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Tamanhos diferentes
    document.body.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 3000);
}
function toggleMenu() {
    const menu = document.getElementById('menu-options');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
