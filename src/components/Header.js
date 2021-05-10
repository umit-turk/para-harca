import React from 'react'
import {moneyFormat} from '../helper';
import '../header.css'

function Header({total ,money}) { // moneyi prop olarak al
    
   return (
       <>
        <div className="header">
            {total > 0 && money - total !== 0 && (
                <div className="header">Harcayacak <span>$ {moneyFormat(money - total)}</span>   paranız kaldı</div>
            )}

                {total === 0 && (
                    <div className="header">Harcamak için  <span>$ {moneyFormat(money)}</span>   paranız var</div>
                )}

                {money - total === 0 && (
                    <div className="header">paranız bitti</div>
                )}
                
        </div>
       </>
   )
}

export default Header
