import React from 'react';

const Items = (props) => {
    const {items, del, increaseQuantity, decreaseQuantity } = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <div className='quantity-div'>
                       <span className='quantity-btn' onClick={() => increaseQuantity(item.id)}>+</span>
                       <span className='total_quantity'>{item.quantity}</span>
                       <span className='quantity-btn' onClick={() => decreaseQuantity(item.id)}>-</span>
                    </div>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items
