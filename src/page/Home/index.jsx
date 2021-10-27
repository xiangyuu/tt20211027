import React from 'react';
import {useObserver,observer,useLocalStore} from "mobx-react";
import {RootStore} from '../../stores/index'
import './index.scss'
import img1 from '../../static/img/外套2.jpg'
import img2 from '../../static/img/外套1.jpg'
import img3 from '../../static/img/短袖1.jpg'
import img4 from '../../static/img/短袖2.jpg'
import img5 from '../../static/img/配件1.jpg'
import img6 from '../../static/img/配件2.jpg'
import img7 from '../../static/img/长袖1.jpg'
import img8 from '../../static/img/长袖2.jpg'
import img9 from '../../static/img/长裤1.jpg'
import img10 from '../../static/img/长裤2.jpg'
import img11 from '../../static/img/短裤1.jpg'
import logo from '../../static/img/header.svg'
import cart from '../../static/img/cart.png'

function Home() {
    const imgList = [
        {img: img1, name: '外套2', cost: '1500'},
        {img: img2, name: '外套1', cost: '1200'},
        {img: img3, name: '短袖1', cost: '300'},
        {img: img4, name: '短袖2', cost: '450'},
        {img: img5, name: '配件1', cost: '250'},
        {img: img6, name: '配件2', cost: '400'},
        {img: img7, name: '长袖1', cost: '600'},
        {img: img8, name: '长袖2', cost: '1000'},
        {img: img9, name: '长裤1', cost: '1100'},
        {img: img10, name: '长裤2', cost: '850'},
        {img: img11, name: '短裤1', cost: '550'},
    ]
    const localStore = useLocalStore(() => RootStore);
    return useObserver(()=>
        <div className='home'>
            <div className='nav'>
                <div className='header'>
                    <div className='logo'><img src={logo}/></div>
                    <div className='login'>
                        <button>注册</button>
                        <button>登入</button>
                    </div>
                </div>
                <div className='catalog'>
                    <ul>
                        <li>上衣</li>
                        <li>短裤</li>
                        <li>长袖</li>
                        <li>长裤</li>
                        <li>外套</li>
                        <li>配件</li>
                    </ul>
                </div>
            </div>
            <div className='body'>
                <div className='img-list'>
                    {localStore.productStore.getAllProducts.map((e, key) => (
                        <div className='item'>
                            <div className='img' key={key}>
                                <img src={e.img}/>
                            </div>
                            <div className='item-detail'>
                                <div className='item-txt'>
                                    <span>{e.name}</span>
                                    <span>${e.cost}</span>
                                </div>
                                <div onClick={()=>localStore.cartStore.addItem(e)} className='cart'>
                                    <img src={cart}/>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Home;
