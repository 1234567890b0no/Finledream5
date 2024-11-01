import React from 'react'
import { CartProvider, useCart } from 'react-use-cart';
import Header from '../Header';
import Pagecart from './Pagecart';
function Cart() {
    const {isEmpty,totalUniqueItems,cartTotal, items, updateItemQuantity,removeItem, } = useCart();

    if (isEmpty) return <h4 className="text-center text-danger">Your cart is empty</h4>;

    return (
        <div>
            <h1 className="text-center"> Cart ({totalUniqueItems})</h1>
            <main class="page">
                <section class="shopping-cart dark">
                    <div class="container">
                        <div class="block-heading">
                            <h2>Shopping Cart</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                        <div class="content">
                            <div class="row">
                                <div class="col-md-12 col-lg-8">
                                    <div class="items">

                                        {items.map((item) =>

                                            <div class="product">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <img class="img-fluid mx-auto d-block image"
                                                            src="/assets/images/top-game-05.jpg " />
                                                              <img class="img-fluid mx-auto d-block image"
                                                            src="/assets/images/top-game-04.jpg" />
                                                             <img class="img-fluid mx-auto d-block image"
                                                            src="/assets/images/cta-bg.jpg" />
                                                    </div>
                                                    {/* <div class="col-md-3">
                                                        <img class="img-fluid mx-auto d-block image"
                                                            src="/assets/images/cta-bg.jpg " />
                                                              <img class="img-fluid mx-auto d-block image"
                                                            src="/assets/images/top-game-04.jpg" />
                                                    </div> */}
                                                    <div class="col-md-8">
                                                        <div class="info">
                                                            <div class="row">
                                                                <div class="col-md-5 product-name">
                                                                    <div class="product-name">
                                                                        <a href="#">{item.id}</a>
                                                                        <div class="product-info">
                                                                            <div>
                                                                                stock: <span class="value">{item.stock} </span>
                                                                            </div>
                                                                            <div>
                                                                                brand: <span class="value"> {item.brand}</span>
                                                                            </div>
                                                                            <div>
                                                                                tags: <span class="value">{item.tags}</span>
                                                                            </div>
                                                                            <div>
                                                                                price : <span class="value">{item.price}</span>
                                                                            </div>
                                                                            <div>
                                                                                discountPercentage : <span class="value">{item.discountPercentage}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 quantity">
                                                                    <label for="quantity">Quantity:</label>
                                                                    <br></br>
                                                                    {item.Quantity}
                                                                    <br></br>
                                                                    <button
                                                                    className="btn btn-warning"
                                                                        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <button
                                                                    className="btn btn-success mx-3"
                                                                        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                                                                    >
                                                                        +
                                                                    </button>
                                                                    <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => removeItem(item.id)}>&times;</button>

                                                                </div>
                                                                <div class="col-md-3 price">
                                                                    <span>${Math.ceil (item.Quantity*item.price)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )}

                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4">
                                    <div class="summary">
                                        <h3>Summary</h3>
                                        <div class="summary-item"><span class="text">Subtotal</span><span class="price">${Math.ceil (cartTotal)}</span></div>
                                        <div class="summary-item"><span class="text">Discount</span><span class="price">$0</span></div>
                                        <div class="summary-item"><span class="text">Shipping</span><span class="price">$0</span></div>
                                        <div class="summary-item"><span class="text">Total</span><span class="price">${Math.ceil (cartTotal)}</span></div>
                                        <button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}
function Allcart() {
  return (
    <CartProvider>
      <Header/>
      <Pagecart/>
      <Cart/>
    </CartProvider>
  )
}

export default Allcart
