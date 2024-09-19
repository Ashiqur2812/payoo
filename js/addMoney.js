// document.getElementById('btn-add-money').addEventListener('click', function (event) {
//     event.preventDefault()
//     console.log('add event handler');

//     const addMoney = document.getElementById('input-add-money').value
//     const pinNumber = document.getElementById('pin-number').value

//     if (pinNumber === '123') {

//         const balance = document.getElementById('account-balance').innerText
//         const checkBalance = Number(balance)
//         const addMoneyInput = Number(addMoney)
//         const newBalance = checkBalance + addMoneyInput

//         document.getElementById('account-balance').innerText = newBalance

//     }
//     else {
//         alert('Failed to add money. Please try again!')
//     }
// })




document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('added event handler');

    const addMoney = document.getElementById('input-add-money').value
    const pinNumber = document.getElementById('pin-number').value

    if (pinNumber === '123') {

        const balance = document.getElementById('account-balance').innerText
        const checkBalance = Number(balance)
        const addMoneyInput = Number(addMoney)
        const newBalance = checkBalance + addMoneyInput

        document.getElementById('account-balance').innerText = newBalance
    }
    else {
        alert('Failed to add money. Please try again!')
    }
})
