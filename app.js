function calculateBtn(){
// Income input
    const incomeInputValue = document.getElementById('income');
// Expenses input
    const foodInputValue = document.getElementById('food');
    const rentInputValue = document.getElementById('rent');
    const clothesInputValue = document.getElementById('clothes');
// Total expenses
    const ExpensesOutput = document.getElementById('total-expenses');
    ExpensesOutput.innerText = parseFloat(foodInputValue.value) + parseFloat(rentInputValue.value) + parseFloat(clothesInputValue.value);
    const balance = document.getElementById('balance');
// Balance
    balance.innerText = parseFloat(incomeInputValue.value) - ExpensesOutput.innerText;
// 3 Error message
    if(incomeInputValue.value == '' && foodInputValue.value == '' && rentInputValue.value == '' && clothesInputValue.value ==''){
        alert('please input field type');
    }
    else if((isNaN(incomeInputValue.value)) && (isNaN(foodInputValue.value)) && (isNaN(rentInputValue.value)) && (isNaN(clothesInputValue.value))){
        alert('please type number');
    }
    else if((incomeInputValue.value || foodInputValue.value || rentInputValue.value || clothesInputValue.value) < 0){
        alert('please type positive number');
    }
}

// Save
function saveBtn(){
   const incomeValue = document.getElementById('income');
   const saveInput = document.getElementById('save-input');
// Saving amount
    const savingAmount = document.getElementById('Saving-amount');
    savingAmount.innerText = parseFloat(incomeValue.value) * parseFloat(saveInput.value) / 100;
// Remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balance.innerText - savingAmount.innerText;
}


