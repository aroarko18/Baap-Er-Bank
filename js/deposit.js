document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString)
    // deposit display
    const currentDeposit = document.getElementById('deposit-total');

    const depositTotalString = currentDeposit.innerText;
    const depositTotal = parseFloat(depositTotalString)
    currentDeposit.innerText = depositTotal + depositAmount

    // balance display
    const balanceField = document.getElementById('balance-total')
    const balanceString = balanceField.innerText
    const balanceTotal = parseFloat(balanceString)
    balanceField.innerText = balanceTotal + depositAmount;

    depositField.value = ' '
})
