document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault()

    const addMoneyInput = document.getElementById('input-add-money').value
    console.log(typeof addMoneyInput);
    const pinNumber = document.getElementById('pin-number').value
    console.log(pinNumber);

    // verify pin number

    if (pinNumber === '12345') {
        console.log('adding money to your account');

        const balance = document.getElementById('account-balance').innerText
        console.log(typeof balance)

        // const newBalance = balance + addMoneyInput
        // console.log(newBalance);
        const addMoney = Number(addMoneyInput)
        console.log(addMoney);
        const checkBalance = Number(balance)
        console.log(checkBalance);
        const newBalance = addMoney + checkBalance
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance
    }
    else {
        alert('Failed to add money. Please try again!')
    }
})