import React from 'react'
import '../../src/App.css';

function Home(){

    return (
        <div>
            <div>Add to Cart
            <img className="cart" src=" https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1128229893?s=612x612" alt="Avatar"/>

           
            </div>
            <h1>Home componemnts kishroe</h1>
            <div className="card">
            <img className="card" src="https://static.toiimg.com/photo/73078527.cms" alt="Avatar"/>
            <div className="container">
                <h4><b>Iphone 6+</b></h4>
                <p>Price $400</p>
            </div>
            <button>Add to Cart</button>
            </div>

        </div>
    )
}

export default Home;