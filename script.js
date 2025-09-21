// General Helper Functions
const getInput = (id) => document.getElementById(id);
const getOutput = (id) => document.getElementById(id);
const displayResult = (outputId, value, errorText = 'Error') => {
  const outputElement = getOutput(outputId);
  if (!outputElement) return;
  outputElement.textContent = isFinite(value) && !isNaN(value) ? value.toFixed(2) : errorText;
};

// Basic Calculator
const basicInput = getInput('basic-input');
const basicAppend = (val) => {
  basicInput.value += val;
};
const basicClear = () => {
  basicInput.value = '';
  getOutput('basic-output').textContent = '0';
};
const basicBack = () => {
  basicInput.value = basicInput.value.slice(0, -1);
};
const basicCalculate = () => {
  try {
    let expression = basicInput.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
    let result = eval(expression);
    displayResult('basic-output', result);
    basicInput.value = result;
  } catch (error) {
    displayResult('basic-output', 'Error');
  }
};

// Scientific Calculator
const sciInput = getInput('sci-input');
const sciAppend = (val) => {
  if (val === 'pi') val = 'Math.PI';
  if (val === 'e') val = 'Math.E';
  if (val === '^') val = '**';
  if (val === 'sqrt(') val = 'Math.sqrt(';
  if (val === 'sin(') val = 'Math.sin(';
  if (val === 'cos(') val = 'Math.cos(';
  if (val === 'tan(') val = 'Math.tan(';
  if (val === 'log(') val = 'Math.log10('; // Using log10 for common logarithm
  sciInput.value += val;
};
const sciClear = () => {
  sciInput.value = '';
  getOutput('sci-output').textContent = '0';
};
const sciBack = () => {
  sciInput.value = sciInput.value.slice(0, -1);
};
const sciCalculate = () => {
  try {
    let expression = sciInput.value.replace(/×/g, '*').replace(/÷/g, '/');
    let result = eval(expression);
    displayResult('sci-output', result);
    sciInput.value = result;
  } catch (error) {
    displayResult('sci-output', 'Error');
  }
};

// BMI Calculator
const calculateBMI = () => {
  const weight = parseFloat(getInput('bmi-weight').value);
  const height = parseFloat(getInput('bmi-height').value);
  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    displayResult('bmi-output', bmi);
  } else {
    displayResult('bmi-output', 'Invalid Input');
  }
};

// Loan Calculator
const calculateLoan = () => {
  const amount = parseFloat(getInput('loan-amount').value);
  const rate = parseFloat(getInput('loan-rate').value) / 100 / 12;
  const years = parseFloat(getInput('loan-years').value);
  const payments = years * 12;

  if (amount > 0 && rate >= 0 && years > 0) {
    const monthlyPayment = (amount * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
    displayResult('loan-output', monthlyPayment);
  } else {
    displayResult('loan-output', 'Invalid Input');
  }
};
