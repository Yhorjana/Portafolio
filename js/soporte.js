function toggleCard(headerElement) {
    const card = headerElement.closest('.card');
    if (card) {
        card.classList.toggle('open');
    }
}