document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault()

    const addMoneyInput = document.getElementById('input-add-money').value
    console.log(addMoneyInput);
    const pinNumber = document.getElementById('pin-number').value
    console.log(pinNumber);
})