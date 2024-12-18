document.getElementById('seriesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const limit = parseInt(document.getElementById('seriesLimit').value);
    let series1 = [];
    let series2 = [];
    
    let a = 0, b = 1;
    for (let i = 0; i < limit; i++) {
      series1.push(a);
      let temp = a + b;
      a = b;
      b = temp;
    }
    
    for (let i = 0; i < limit; i++) {
      series2.push(i.toString(2));
    }
    document.getElementById('seriesResult').textContent = `Serie 1: ${series1.join(', ')}\nSerie 2: ${series2.join(', ')}`;
  });
  
  document.getElementById('factorialForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const n = parseInt(document.getElementById('factorialNumber').value);
    let factorial = 1;
    let suma = 0;
    let serie = '';
    for (let i = 1; i <= n; i++) {
      factorial *= i; 
      suma += factorial; 
      serie += `${i}! = ${factorial}\n`;
    }
    document.getElementById('factorialResult').textContent = `Factoriales:\n${serie}Suma de factoriales: ${suma}`;
  });
  
  document.getElementById('rotateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const number = document.getElementById('rotateNumber').value;
    const rotated = number.slice(1) + number[0];
    document.getElementById('rotateResult').textContent = `Rotado: ${rotated}`;
  });
  
  document.getElementById('capicuaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const number = document.getElementById('capicuaNumber').value.toString();
    const isCapicua = number === number.split('').reverse().join('');
    document.getElementById('capicuaResult').textContent = isCapicua ? 'Es Capicúa' : 'No es Capicúa';
  });
  
  document.getElementById('primeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const num = parseInt(document.getElementById('primeNumber').value);
    const isPrime = num > 1 && Array.from({ length: Math.floor(Math.sqrt(num)) }, (_, i) => i + 2).every(i => num % i !== 0);
    document.getElementById('primeResult').textContent = isPrime ? 'Es Primo' : 'No es Primo';
  });
  
  document.getElementById('fibonacciForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const n = parseInt(document.getElementById('fibonacciNumber').value);
    let a = 0, b = 1, fibonacci = [0];
    while (b <= n) {
      fibonacci.push(b);
      [a, b] = [b, a + b];
    }
    document.getElementById('fibonacciResult').textContent = `Serie Fibonacci: ${fibonacci.join(', ')}`;
  });
  
  document.getElementById('palindromeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const word = document.getElementById('palindromeWord').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPalindrome = word === word.split('').reverse().join('');
    document.getElementById('palindromeResult').textContent = isPalindrome ? 'Es un Palíndromo' : 'No es un Palíndromo';
  });
  
  document.getElementById('invertForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('invertText').value;
    const inverted = text.split('').reverse().join('');
    document.getElementById('invertResult').textContent = `Cadena Invertida: ${inverted}`;
  });
  
  document.getElementById('romanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const num = parseInt(document.getElementById('romanNumber').value);
    if (isNaN(num) || num < 1 || num > 3999) {
      document.getElementById('romanResult').textContent = 'Por favor, introduce un número válido entre 1 y 3999.';
      return;
    }
    
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
    
    let roman = '';
    let number = num;
    
    for (const { value, numeral } of romanNumerals) {
      while (number >= value) {
        roman += numeral;
        number -= value;
      }
    }
    
    document.getElementById('romanResult').textContent = `El número ${num} en romano es: ${roman}`;
  });
  
  document.getElementById('pascalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const rows = parseInt(document.getElementById('pascalRows').value);
    let result = [];
    for (let i = 0; i < rows; i++) {
      result[i] = new Array(i + 1).fill(1);
      for (let j = 1; j < i; j++) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    document.getElementById('pascalResult').textContent = result.map(row => row.join(' ')).join('\n');
  });
  