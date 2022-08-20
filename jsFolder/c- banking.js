
//  deposit area 
//  deposit area 
document.getElementById("depo-btn").addEventListener("click",function(){
    //a.. input  amount deposit
    const depoInput = document.getElementById("input-amount");
    const depoInputText = depoInput.value;
    const inputDepos = parseFloat(depoInputText);
    //b...update total deposit amount
    const totalDeposit = document.getElementById("total-depo");
    const totalDepositText = totalDeposit.innerText;
    const totalDepoAmount = parseFloat(totalDepositText);
    const totalDepo = inputDepos + totalDepoAmount;
    totalDeposit.innerText = totalDepo;
    //c...update current balance
    const balance = document.getElementById("current-balance");
    const balanceText = balance.innerText;
    const currentBalance = parseFloat(balanceText); 
    const updateBalance = currentBalance + inputDepos;
    balance.innerText = updateBalance;
    depoInput.value = '';
})

//  withdraw area 
//  withdraw area 
document.getElementById("withd-btn").addEventListener("click",function(){
    //a.. input withdraw amount
    const withdInput = document.getElementById("withd-amount");
    const withdInputText = withdInput.value;
    const inputWithd = parseFloat(withdInputText);
    //b...update total  withdraw amount
    const totalWithd = document.getElementById("total-withdraw");
    const totalWithdText = totalWithd.innerText;
    const totalWithdAmount = parseFloat(totalWithdText);
    const totalWithddraw = inputWithd + totalWithdAmount;
    totalWithd.innerText = totalWithddraw; 
    //c...update current balance
    const balance = document.getElementById("current-balance");
    const balanceText = balance.innerText;
    const currentBalance = parseFloat(balanceText); 
    const updateBalance = currentBalance - inputWithd;
    balance.innerText = updateBalance;
    withdInput.value = '';
})