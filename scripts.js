//$('.south').toggleClass('purple');
//$('.north').toggleClass('purple');

let color='purple';
let number=10;
let word='cool';

if (color==="purple") {
    $('.north').css('background','purple');
}

if (number > 100) {
    $(".east").text("whoah, that's a big number.");
  } else {
    $(".east").text("just a regular number, please.");
  }
  
  if (word === "cool") {
    $(".south").text("Power of DOM");
  } else {
    $(".west").text("Power of DOM");
  }


  var i, j;

  document.write('<table class="multiplicationtable">');
  for  (i=1; i<=15; i++) {
     document.write('<tr>');
     for (j=1; j<=15; j++) {
        document.write('<td class="mptd">', i*j, '</td>');
     }
     document.write('</tr>');
  }
  document.write('</table>');

  document.write('Netti');