//upfate deposit & withdraw using same function
function updateAmount(userId,exitsId){
    const userInput = document.getElementById(userId);
    const userInputText = userInput.value;
    const userAmount = parseFloat(userInputText);
    const exitsField = document.getElementById(exitsId)
    const exitsFieldText = exitsField.innerText;
    const exitsAmount = parseFloat(exitsFieldText);
    const totalAmount = userAmount + exitsAmount;
    exitsField.innerText = totalAmount;
    // return totalAmount;
}
//update balance function
function updateBalance(userId,isAdd){
    const userInput = document.getElementById(userId);
    console.log(userInput);
    const userInputText = userInput.value;
    console.log(userInputText);
    const userAmount = parseFloat(userInputText);
    const exitsBalance = document.getElementById('balance-field');
    const exitsBalanceText = exitsBalance.innerText;
    const exitsBalanceAmount = parseFloat(exitsBalanceText);
    console.log(userAmount);
    console.log(exitsBalanceAmount);
    if(isAdd == true){
        const totalBalanceAmount = userAmount + exitsBalanceAmount;
        exitsBalance.innerText = totalBalanceAmount;
    }
    else{
        const totalBalanceAmount = exitsBalanceAmount - userAmount;
        exitsBalance.innerText = totalBalanceAmount;
    } 
    //clear the input value
    userInput.value = '';
}

//handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    updateAmount('user-deposit-input','deposit-field');
    updateBalance('user-deposit-input',true);
});
//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    updateAmount('user-withdraw-input','withdraw-field');
    updateBalance('user-withdraw-input',false);
});