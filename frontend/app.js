document.getElementById('get-joke-btn').addEventListener('click', () => {
  fetch('http://localhost:3000/api/v1/blagues/random')  // URL de ton API
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke-content').textContent = data.content;
    })
    .catch(error => {
      document.getElementById('joke-content').textContent = 'Désolé, une erreur est survenue.';
      console.error('Erreur:', error);
    });
});