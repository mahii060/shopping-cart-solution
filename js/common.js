function updateNumberById(id, updateCommand) {
    const inputField = document.getElementById(id);
    const quantityString = inputField.value;
    const previousQuantity = parseInt(quantityString);
    let newQuantity;
    if (updateCommand === 'Increase') {
        newQuantity = previousQuantity + 1;
    }
    else if (updateCommand === 'Decrease' && previousQuantity > 0) {
        newQuantity = previousQuantity - 1;
    }
    else {
        newQuantity = 0;
    }
    inputField.value = newQuantity;

    return newQuantity;
}

//
function getTotalPriceById(id) {
    const totalPriceElement = document.getElementById(id);
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseInt(totalPriceString);
    return totalPrice;

}
//
function calculateSubTotal() {
    const phoneTotalPrice = getTotalPriceById('phone-total-price')
    const caseTotalPrice = getTotalPriceById('case-total-price')
    const totalSubtotal = phoneTotalPrice + caseTotalPrice;
    return totalSubtotal;
}

//
function setInnerTextById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

// 
function getTaxAmount() {
    const totalSubtotal = calculateSubTotal();
    const taxAmountElement = document.getElementById('tax-amount');
    const taxAmountString = (totalSubtotal * .10).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    taxAmountElement.innerText = taxAmount;
    return taxAmount;
}
function getFinalTotal() {
    const totalSubtotal = calculateSubTotal();
    const taxAmount = getTaxAmount();
    const finalTotal = totalSubtotal + taxAmount;
    setInnerTextById('final-total', finalTotal);
}