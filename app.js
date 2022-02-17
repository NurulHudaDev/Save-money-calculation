document.getElementById('calculate-btn').addEventListener('click', function(){
    // Income
    const incomeInputValue = document.getElementById('income').value;
    const NewInputBtnIncome = parseInt(incomeInputValue);

    // Expenses
    const foodInputValue = document.getElementById('food').value;
    const NewInputBtnFood = parseInt(foodInputValue);
    
    const rentInputValue = document.getElementById('rent').value;
    const NewInputBtnRent = parseInt(rentInputValue);

    const clothesInputValue = document.getElementById('clothes').value;
    const NewInputBtnClothes = parseInt(clothesInputValue);
    
    // Expenses total
    const calculateTotal = NewInputBtnFood + NewInputBtnRent + NewInputBtnClothes;
    document.getElementById('total-expenses').innerText = calculateTotal;
    
    // Total balance
    const totalBalance = NewInputBtnIncome - calculateTotal;
    document.getElementById('balance').innerText = totalBalance;




})


