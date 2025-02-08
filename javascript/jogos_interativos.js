function playGame(element) {
  const gameSrc = element.getAttribute('data-src');
  window.location.href = gameSrc;
}
