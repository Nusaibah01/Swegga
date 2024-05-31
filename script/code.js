//  calculation function
function calculateTotal() {
    let femaleQuantity = parseInt (document.getElementById("#femaleQuantity").value)
    let maleQuantity = parseInt(document.getElementById("#maleQuantity").value)
    
    const femalePrice = 150.95
    const malePrice = 180.95
    
    let femaleTotal = femaleQuantity * femalePrice
    let maleTotal = maleQuantity  * malePrice
    let totalPrice = femaleTotal + maleTotal
    
    

    // Displaying the total prices:
    // document.getElementById('totalPrice').innerHTML = "R"  + orderTotalPrice;
    document.querySelector('#femaleTotal').innerHTML = (`R ${femaleTotal.toFixed(2)}`)
    document.querySelector('#maleTotal').innerHTML = (`R ${maleTotal.toFixed(2)}`)
    document.querySelector('#totalPrice').innerHTML = (`R ${totalPrice.toFixed(2)}`)
}
