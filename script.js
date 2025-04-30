const letters = ['A', 'B'];
let currentIndex = 0;

function updateModel() {
  const letter = letters[currentIndex];
  document.getElementById('currentLetter').textContent = letter;

  const model = document.getElementById('model');
  model.setAttribute('gltf-model', `#model${letter}`);

  // Play audio
  const sound = document.getElementById(`sound${letter}`);
  sound.play();
}

function previousLetter() {
  currentIndex = (currentIndex - 1 + letters.length) % letters.length;
  updateModel();
}

function nextLetter() {
  currentIndex = (currentIndex + 1) % letters.length;
  updateModel();
}
document.querySelector('#model').addEventListener('model-loaded', () => {
  console.log('Modèle chargé avec succès');
});
