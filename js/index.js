const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function calc(op) {
    const a = parseFloat(num1.value) || 0;
    const b = parseFloat(num2.value) || 0;
    let res;
    switch(op) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/': res = b !== 0 ? a / b : 'Error';
    }
    result.textContent = typeof res === 'number' ? res.toFixed(2) : res;
}
function clearAll() {
    num1.value = '';
    num2.value = '';
    result.textContent = '0';
        }