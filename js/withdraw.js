document.getElementById('withDraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldString);
    
    
    // withdraw display
    const withdrawAmountField = document.getElementById('withdraw-total')
    const withdrawAmountFieldString = withdrawAmountField.innerText;
    const withdrawAmount = parseFloat(withdrawAmountFieldString)
    withdrawAmountField.innerText = withdrawAmount + withdrawFieldAmount;

    // balance display
    const balance = document.getElementById('balance-total')
    const balanceString = balance.innerText
    const balanceAmount = parseFloat(balanceString)

    if (balanceAmount >= withdrawFieldAmount){
        balance.innerText = balanceAmount - withdrawFieldAmount;
    }
    else{
        alert('Tk ki gache dhore?\nJa nije kamai kor')
    }

    withdrawField.value = ''
})