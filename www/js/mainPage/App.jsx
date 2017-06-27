import '../../css/mainPage/App.css'
import React from 'react';
// import ShopTitle from './shopTitle/ShopTitle.jsx';
export default class App extends React.Component{
    render(){
        return (
            <div className='main'>
                <div className='page_left'>
                    <div className='header'>
                        <h1>高大魔王的博客</h1>
                        <h3>xxxxxxxxxxxxx</h3>
                    </div>
                    <div className='menu'>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>about</a></li>
                        </ul>
                    </div>
                </div>
                <div className='page_right'></div>
            </div>
        )
    }
}