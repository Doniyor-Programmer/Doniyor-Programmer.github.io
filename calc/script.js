window.addEventListener("DOMContentLoaded", () => {
	class Calc {
		constructor(prevOperand, currentOperand) {
			this.prevOperand = prevOperand;
			this.currentOperand = currentOperand;
			this.clear();
		}

		clear() {
			this.prevOper = '';
			this.currentOper = '';
			this.operation = undefined;
		}

		delete() {
			this.currentOper = this.currentOper.toString().slice(0, -1);
		}

		appendNum(num) {
			if (num === '.' && this.currentOper.includes('.')) {
				return;
			}
			this.currentOper = this.currentOper.toString() + num.toString();
		}

		chooseOperation(operation) {
			if (this.currentOper === '') {
				return;
			}
			if (this.prevOper !== '') {
				this.compute();
			}
			this.operation = operation;
			this.prevOper = this.currentOper;
			this.currentOper = '';
		}

		compute() {
			let computation;
			const prev = parseFloat(this.prevOper),
				  current = parseFloat(this.currentOper);
			if (isNaN(prev) || isNaN(current)) {
				return;
			}
			switch (this.operation) {
				case '+':
					computation = prev + current;
					break;
				case '-':
					computation = prev - current;
					break;
				case '*':
					computation = prev * current;
					break;
				case '/':
					computation = prev / current;
					break;
				default:
					return;
			}
			this.currentOper = computation;
			this.operation = undefined;
			this.prevOper = '';
		}

		getDisplayNumber(number) {
			const stringNumber = number.toString();
			const integerDigits = parseFloat(stringNumber.split('.')[0]);
			const decimalDigits = stringNumber.split('.')[1];
			const floatNumber = parseFloat(number);
			let integerDisplay;
			if (isNaN(integerDigits)) {
				integerDisplay = '';
			} else {
				integerDisplay = integerDigits.toLocaleString('en', {
					maximumFractionDigits: 0
				});
			}
			if (decimalDigits != null) {
				return `${integerDisplay}.${decimalDigits}`;
			} else {
				return integerDisplay;
			}
		}

		updateDisplay() {
			this.currentOperand.innerText = this.getDisplayNumber(this.currentOper);
			if (this.operation != null) {
				this.prevOperand.innerText = `${this.getDisplayNumber(this.prevOper)} ${this.operation}`;
			} else {
				this.prevOperand.innerText = '';
			}
		}
	}

	const numBtns = document.querySelectorAll('[data-number]'),
		  operationBtns = document.querySelectorAll('[data-operation]'),
		  equalsBtn = document.querySelector('[data-equals]'),
		  deleteBtn = document.querySelector('[data-delete]'),
		  allClearBtn = document.querySelector('[data-all-clear]'),
		  prevOperand = document.querySelector('.prev-operand'),
		  currentOperand = document.querySelector('.current-operand');

	const calc = new Calc(prevOperand, currentOperand);

	numBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			calc.appendNum(btn.innerText);
			calc.updateDisplay();
		});
	});

	operationBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			calc.chooseOperation(btn.innerText);
			calc.updateDisplay();
		});
	});

	equalsBtn.addEventListener('click', () => {
		calc.compute();
		calc.updateDisplay();
	});

	allClearBtn.addEventListener('click', () => {
		calc.clear();
		calc.updateDisplay();
	});

	deleteBtn.addEventListener('click', () => {
		calc.delete();
		calc.updateDisplay();
	});
});