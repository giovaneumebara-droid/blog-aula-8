// Recupera as curtidas e o estado salvo no navegador (ou inicia do zero)
let likes = parseInt(localStorage.getItem('page_likes')) || 0;
let isLiked = localStorage.getItem('page_is_liked') === 'true';

const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

// Atualiza a interface visual
function updateUI() {
    likeCount.innerText = likes;
    if (isLiked) {
        likeBtn.classList.add('liked');
    } else {
        likeBtn.classList.remove('liked');
    }
}

// Alterna o estado de curtida
function toggleLike() {
    if (isLiked) {
        likes--;
        isLiked = false;
    } else {
        likes++;
        isLiked = true;
    }

    // Salva a alteração no armazenamento local do navegador
    localStorage.setItem('page_likes', likes);
    localStorage.setItem('page_is_liked', isLiked);

    updateUI();
}

// Carrega os dados na tela assim que abre a página
updateUI();
