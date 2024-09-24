function getValueFromInput(id) {
    let inputValue = document.getElementById(id).value;
    return inputValue;
}

function getValueFromText(id) {
    let inputValue = document.getElementById(id).innerText;
    return inputValue;
}

function updateFundBalance(input1, input2) {
    let updateBalance = parseInt(input1) + parseInt(input2);
    return updateBalance;
}

function remainingBalance(previousBalance, newInput) {
    let balance = parseInt(previousBalance) - parseInt(newInput);
    return balance;
}