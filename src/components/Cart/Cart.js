import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    //const totalPrice =cart.reduce((total,ele) => total+ele.price,0)
    let total=0;
    for(let i=0;i<cart.length;i++){
        let element=cart[i];
        total=total+element.price;
    }
    let shipping =0;
    if(total>0&&total<=15){
        shipping=12.99;
    }
    else if(total>15&&total<=35){
        shipping=4.99;
    }
    else if(total>35){
        shipping=0;
    }
    const tax=Number((total/10).toFixed(2));
    const grandTotal=Number((total+shipping+tax).toFixed(2));
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p> <small>Shipping Cost: {shipping}</small> </p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;