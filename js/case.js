//
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-total-price');
    caseTotalElement.innerText = caseTotalPrice;
}

// Plus button
document.getElementById('case-button-plus').addEventListener('click', function () {
    const newCaseNumber = updateNumberById('case-input-field', 'Increase');
    updateCaseTotalPrice(newCaseNumber);

    const totalSubtotal = calculateSubTotal();
    setInnerTextById('subtotal', totalSubtotal);

    getTaxAmount();
    getFinalTotal();

})

// Minus button
document.getElementById('case-button-minus').addEventListener('click', function () {
    const newCaseNumber = updateNumberById('case-input-field', 'Decrease');
    updateCaseTotalPrice(newCaseNumber);

    const totalSubtotal = calculateSubTotal();
    setInnerTextById('subtotal', totalSubtotal);

    getTaxAmount();
    getFinalTotal();
})