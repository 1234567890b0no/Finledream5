import { CartProvider, useCart } from "react-use-cart";
import Allban from "./Allban";
import Header from "../Header";
import { NavLink } from "react-router-dom";
import Bono from "./Bono";
function Page() {
    const { addItem } = useCart();



    return (
        <div>
            <div className="section trending">
                <div className="container">

                    <div className="row trending-box">

                        {Allban.map((element) => (
                            <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                                <div className="item">
                                    <div className="thumb">
                                        <NavLink to="/Ourshop"><img src="assets/images/trending-03.jpg" alt="" /></NavLink>
                                        <span className="price"><em>${element.price}</em>$76</span>
                                    </div>
                                    <div className="down-content">
                                        <span className="category">{element.title}</span>
                                        <h4>
                                            <ul className='mt-5 text-center'>
                                                <li>

                                                    id:<span>{element.id}</span>
                                                </li>

                                                <li>

                                                    title:<span>{element.title}</span>
                                                </li>
                                                <li>

                                                    tags:<span>{element.tags}</span>
                                                </li>

                                                <li>

                                                    rating:<span>{element.rating}</span>
                                                </li>
                                                <li>

                                                    price:<span>{element.price}</span>
                                                </li>
                                            </ul></h4>
                                        <button onClick={() => addItem(element)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}




                    </div>
                </div>
            </div>
        </div>
    );
}

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
                                                    </div>
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

function Allshop() {
    return (
        <CartProvider>
            <Header />
            <Bono />
            <Page />
            {/* <Cart /> */}
        </CartProvider>

    );
}
export default Allshop;
