document.getElementById('btn-cash-money').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('added event handler');

    const cashMoney = document.getElementById('input-cash-money').value
    const pinNumber = document.getElementById('pin-number').value

    if(pinNumber === '1234'){
        
        const balance = document.getElementById('account-balance').innerText
        const checkBalance = Number(balance)
        const cashOutMoney = Number(cashMoney)
        const newBalance = checkBalance - cashOutMoney

        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('Please try again!')
    }
})