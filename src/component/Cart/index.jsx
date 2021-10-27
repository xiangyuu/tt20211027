import React from 'react';
import './index.scss'
function Cart() {
  return (
    <div className='cart-list'>
      <p>購物清單</p>
      <ul>
        <li>服裝1</li>
        <li>服裝2</li>
        <li>服裝3</li>
        <li>服裝4</li>
        <li>服裝5</li>
      </ul>
      <div>
        <button className='checkout'>結帳</button>
      </div>

    </div>
  )
}
  export default Cart;
