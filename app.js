function calculateBtn(){
    // Income
    const incomeInputValue = document.getElementById('income');
    // Expenses
    const foodInputValue = document.getElementById('food');
    const rentInputValue = document.getElementById('rent');
    const clothesInputValue = document.getElementById('clothes');

    const ExpensesOutput = document.getElementById('total-expenses');
    ExpensesOutput.innerText = parseFloat(foodInputValue.value) + parseFloat(rentInputValue.value) + parseFloat(clothesInputValue.value);
    const balance = document.getElementById('balance');
    balance.innerText = parseFloat(incomeInputValue.value) - ExpensesOutput.innerText;

    if(incomeInputValue.value == '' && foodInputValue.value == '' && rentInputValue.value == '' && clothesInputValue.value ==''){
        alert('please input field type');
    }
    if((isNaN(incomeInputValue.value)) && (isNaN(foodInputValue.value)) && (isNaN(rentInputValue.value)) && (isNaN(clothesInputValue.value))){
        alert('please type number');
    }
}

// Save
function saveBtn(){
   const incomeValue = document.getElementById('income');
   const saveInput = document.getElementById('save-input');

    const savingAmount = document.getElementById('Saving-amount');
    savingAmount.innerText = parseFloat(incomeValue.value) * parseFloat(saveInput.value) / 100;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balance.innerText - savingAmount.innerText;
}


