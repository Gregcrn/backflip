const card = document.querySelectorAll('.container div');

card.forEach((card) => card.addEventListener('mouseover', () => {
    card.classList.add('flip')
}))