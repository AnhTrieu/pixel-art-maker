let cellCount = document.querySelectorAll('.cell');
let canvasSize = (80 * 44);
let colorPalette = ['crimson', 'maroon', 'indigo', 'plum', 'lavender', 'magenta', 'thistle', 'fuchsia', 'hotpink', 'salmon', 'coral', 'goldenrod', 'bisque', 'lime', 'chartreuse', 'olive', 'forestgreen', 'teal', 'cyan', 'aquamarine', 'azure', 'mediumblue', 'royalblue', 'navy', 'black', 'gray', 'silver', 'khaki', 'tan', 'wheat', 'beige', 'ivory']

// while (colorPalette.length < 32) {
//     do {
//         let colorHex = [0 ,0, 0];
//         let color = '';
//         for (let i = 0; i < colorHex.length; i++) {
//           if (colorHex[i] < 256) {
//             colorHex[i] + 8;
//           }
//           color = colorHex.join('');
//         }
//     } while (colorPalette.indexOf(color) >= 0);
//     colorPalette.push("#" + ("000000" + color.toString(16)).slice(-6));
// }

for (let ele1 = cellCount.length; ele1 < canvasSize; ele1++) {
  let newCell = document.createElement('div');
  newCell.classList.add('cell');
  document.querySelector('.canvas').append(newCell);
}

for (let ele2 = 0; ele2 < colorPalette.length; ele2++) {
  let color = document.createElement('div');
  color.classList.add('color');
  color.style.background = colorPalette[ele2];
  document.querySelector('.color-palette').append(color);
}

  let picker = document.querySelectorAll('.color');
  picker.forEach(function(ele3) {
    ele3.addEventListener('click', function (){
      document.querySelector('.box').style.background = ele3.style.background;
      document.querySelector('.label').innerText = ele3.style.background;
    });
  });

  document.querySelectorAll('.cell').forEach(function(ele4) {
    ele4.addEventListener('click', function() {
      ele4.style.background = document.querySelector('.box').style.background;
      console.log(ele4.style.background);
    });
  });
