let field, cur;

function ready() {
  console.log('DOMContentLoaded');
  field = document.querySelector('.result-cont');
  updateCurValue('0');
  let res = '0';
  let operation = '';
  let buttons = document.querySelectorAll('.round');
  console.log('buttons', buttons);
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', (e) => {
      let target = e.target
      let btnText = target.innerHTML;
      if (btnText === '.') {
        if (cur.indexOf('.') === -1) {
          operation = '';
          updateCurValue(cur + '.');
        }
      } if (btnText >= '0' && btnText <= '9') {
        if (cur === '0') {
          updateCurValue(btnText);
        } else if (operation === '=') {
          operation = '';
          updateCurValue(btnText);
        } else {
          updateCurValue(cur + btnText);
        }
      } else if (btnText == '+' || btnText == '-' || btnText == '×' || btnText == '÷') {
        operation = btnText;
        res = cur;
        cur = '0';
      } else if (btnText == '=') {
        if (operation === '+') {
          res = Number(res) + Number(cur);
        } else if (operation === '-') {
          res = Number(res) - Number(cur);
        } else if (operation === '×') {
          res = Number(res) * Number(cur);
        } else if (operation === '÷') {
          res = Number(res) / Number(cur);
        }
        updateCurValue(res);
        operation = '=';
      } else if (btnText == 'AC') {
        updateCurValue('0');
        operation = '';
        res = '0';
      } else if (btnText == '+/-') {
        if (cur !== '0') {
          updateCurValue(Number(cur) * (-1));
        }
      } else if (btnText == '%') {
        res = Number(cur) / 100;
        updateCurValue(res);
      }
    });
  }
}

function updateCurValue(newValue) {
  cur = String(newValue);
  field.innerHTML = newValue;
}

document.addEventListener("DOMContentLoaded", ready);