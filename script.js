let string = "";
let memory = 0;
let evaluated = false;

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML === '=') {
        string = eval(string);
        document.querySelector('input').value = string;
        evaluated = true;
      } else if (e.target.innerHTML === 'C') {
        string = "";
        document.querySelector('input').value = string;
        evaluated = false;
      } else if (e.target.innerHTML === 'M+') {
        let result = eval(string);
        memory += result;
        string = "";
        document.querySelector('input').value = memory;
        evaluated = false;
      } else if (e.target.innerHTML === 'log') {
        let result = eval(string);
        string = Math.log10(result).toFixed(2).toString();
        document.querySelector('input').value = string;
        evaluated = true;
      } else if (e.target.innerHTML === 'x^2') {
        let result = eval(string);
        string = Math.pow(result, 2).toString();
        document.querySelector('input').value = string;
        evaluated = true;
      } else {
        if (evaluated) {
          string = "";
          evaluated = false;
        }
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }
    } catch (err) {
      string = "Invalid Input";
      document.querySelector('input').value = string;
      evaluated = true;
    }
  });
});
