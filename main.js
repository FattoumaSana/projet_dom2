document.addEventListener('DOMContentLoaded', function () {
  // Sélection des éléments
  var colorBox = document.getElementById('color-box');
  var changeColorBtn = document.getElementById('change-color-btn');

  // Générer une couleur aléatoire
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //chengement de couleur Dom
  changeColorBtn.addEventListener('click', function () {
    var newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
