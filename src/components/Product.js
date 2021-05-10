import React from 'react'
import '../product.css'
import {moneyFormat} from '../helper'

function Product({product, basket, setBasket, money, total}) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        // basket'te ürün var mı yok mu diye kontrol etmeliyiz.
        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce eklenmiş demek.
        if(checkBasket){
            checkBasket.amount += 1 //eğer daha önce ürün eklenmişse amount'u bir arttır.
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]) //o anki ürünü hariç tutarak daha sonra onu amount ile ekledim.
        }else{
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1 //eğer daha önce ürün eklenmişse amount'u bir azalt
            if(currentBasket.amount === 0){//eğer sonuncuyu sattıysak basketten çıkartmalıyız.
                setBasket([...basketWithoutCurrent])
            } else {
            setBasket([...basketWithoutCurrent, currentBasket]) //o anki ürünü hariç tutarak daha sonra onu amount ile ekledim.
            }
    }


    return (
        <div className="product">
        <img src={product.image} />
            <h6>{product.title}</h6>
            <div className="price">${moneyFormat(product.price)}</div>
            <div className="actions">
               <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button className="buy-btn" disabled={total + product.price > money } onClick={addBasket}>Satın al</button>
            </div>
            <style jsx>{`
            .product {
                padding: 10px;
                background: #fff;
                border: 1px solid #ddd;
                margin-bottom: 20px;
            }
            `}</style>
        </div>
    )
}

export default Product;
