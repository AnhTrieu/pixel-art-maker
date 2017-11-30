  let colorPalette = document.querySelectorAll("#color-palette [class^='col']");
  let colorPicker = "";
  colorPalette.forEach(function(color) {
    color.addEventListener('click', function() {
      colorPicker = color.id;
    });
  });

  let square = document.querySelectorAll("#canvas [class^='col']");
  square.forEach(function(ele) {
    ele.addEventListener('click', function() {
      ele.style.background = colorPicker;
    });
  });
