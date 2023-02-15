const cartArray =[];
function display(cartProduct){

    let totalPrice =  0;

    // console.log(cartProduct);
    const tbody = document.getElementById('cart-products');

    tbody.innerHTML ='';

    for(let i = 0; i< cartProduct.length; i++){
        const element = cartArray[i];
        const name = element.productName;
        const price = element.productPrice;
        // calculate
        totalPrice = totalPrice + price;

         const tr = document.createElement('tr');
        tr.innerHTML=`
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;
        tbody.appendChild(tr);
    }

    const tr = document.createElement('tr');
    tr.innerHTML= `
    <th></th>
    <td>Total Price: </td>
    <td>${totalPrice}</td>
    <td></td>
    `;
    tbody.appendChild(tr);
}

function addToCart(items){
    // console.log(items.parentNode.parentNode.children);
    // console.log(items.parentNode.parentNode.children[0].innerText);
    // console.log(items.parentNode.parentNode.children[1].children[0].innerText);

    const productName = items.parentNode.parentNode.children[0].innerText;

    const productPrice = items.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productName, productPrice);

    const productObj ={
        productName : productName,
        productPrice: parseFloat(productPrice) 
    }
    cartArray.push(productObj);
    // console.log(cartArray.length)
    document.getElementById('total-add-product').innerText = cartArray.length;


    display(cartArray);
}