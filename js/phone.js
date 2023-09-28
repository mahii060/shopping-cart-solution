//
function updatePhoneTotalPrice(newPhoneQuantity) {
    const totalPhonePrice = newPhoneQuantity * 1219;
    const phoneTotalElement = document.getElementById('phone-total-price'); phoneTotalElement.innerText = totalPhonePrice;
}

//Plus
document.getElementById('phone-button-plus').addEventListener('click', function () {
    const newPhoneQuantity = updateNumberById('phone-input-field', 'Increase');
    updatePhoneTotalPrice(newPhoneQuantity);

    const totalSubtotal = calculateSubTotal();
    setInnerTextById('subtotal', totalSubtotal);

    getTaxAmount();
    getFinalTotal();
})

//Minus
document.getElementById('phone-button-minus').addEventListener('click', function () {
    const newPhoneQuantity = updateNumberById('phone-input-field', 'Decrease');
    updatePhoneTotalPrice(newPhoneQuantity);

    const totalSubtotal = calculateSubTotal();
    setInnerTextById('subtotal', totalSubtotal);

    getTaxAmount();
    getFinalTotal();
})