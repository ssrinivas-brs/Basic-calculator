const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('input'));

buttons.map( button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.value;
    if(buttonText === 'C') {
      display.value = '';
    } else if(buttonText === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error"
      }
    } else {
      display.value += buttonText;
    }
  });
});