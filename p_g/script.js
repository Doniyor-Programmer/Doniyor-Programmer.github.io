const characterAmountRange = document.getElementById("characterAmountRange"),
      characterAmountNumber = document.getElementById("characterAmountNumber"),
      includeUppercaseElement = document.getElementById("includeUppercase"),
      includeNumbersElement = document.getElementById("includeNumbers"),
      includeSymbolsElement = document.getElementById("includeSymbols"),
      form = document.getElementById("passwordGeneratorForm"),
      passwordDisplay = document.getElementById("passwordDisplay"),
      LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122),
      UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90),
      NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57),
      SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
        arrayFromLowToHigh(58, 64)
      ).concat(
        arrayFromLowToHigh(91, 96)
      ).concat(
        arrayFromLowToHigh(123, 126)
      );

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value,
          includeUppercase = includeUppercaseElement.checked,
          includeNumbers = includeNumbersElement.checked,
          includeSymbols = includeSymbolsElement.checked,
          password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (includeUppercase) {
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    }
    if (includeNumbers) {
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    }
    if (includeSymbols) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    }

    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i < high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}