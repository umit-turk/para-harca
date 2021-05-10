import React from 'react'
import BasketItem from './BasketItem'
import '../basket.css'

function Basket({ basket, resetBasket, products, total }) {
    return (
        <React.Fragment>
            <div className="basket-container container">
            <h3>Alışveriş Detayları</h3>
            <ul>
            {
                basket.map(item => (
                    <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                ))
            }
            </ul>

            <div className="total">
                Toplam : ${total}
            </div>
            {
                total > 0 && (
                    <button className="basket-btn-reset" onClick={resetBasket}>Sepeti Sıfırla</button>
                )
            }
            </div>
        </React.Fragment>
    )
}

export default Basket
