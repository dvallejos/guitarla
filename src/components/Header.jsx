import { Fragment } from "react";

/**
 * Header component
 * Displays the logo and shopping cart summary.
 * Props:
 * - cart: array of cart items
 * - deleteToCart: function to clear the entire cart
 * - removeFromCart: function to remove a single item by ID
 * - increaseQuantity: function to increment quantity by ID
 * - decreaseCart: function to decrement quantity by ID
 */
export default function Header({ cart, deleteToCart, removeFromCart, increaseQuantity, decreaseCart,isEmpty,cartTotal }) {

    return (
        <Fragment>
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        {/* Logo */}
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                            </a>
                        </div>

                        {/* Shopping Cart Section */}
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div className="carrito">
                                <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                                <div id="carrito" className="bg-white p-3">
                                    {isEmpty ? (
                                        <p className="text-center">El carrito esta vacio</p>
                                    ) : (
                                        <>
                                            <table className="w-100 table">
                                                <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {cart.map(item => {
                                                    const { id, name, price, image, quantity } = item;
                                                    return (
                                                        <tr key={id}>
                                                            <td>
                                                                <img className="img-fluid" src={`/img/${image}.jpg`} alt={name} />
                                                            </td>
                                                            <td>{name}</td>
                                                            <td className="fw-bold">$ {price}</td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={() => decreaseCart(id)}
                                                                >
                                                                    -
                                                                </button>
                                                                {quantity}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={() => increaseQuantity(id)}
                                                                >
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    type="button"
                                                                    onClick={() => removeFromCart(id)}
                                                                >
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                            <p className="text-end">
                                                Total pagar: <span className="fw-bold">$ {cartTotal}</span>
                                            </p>
                                            <button
                                                className="btn btn-dark w-100 mt-3 p-2"
                                                onClick={() => deleteToCart()}
                                            >
                                                Vaciar Carrito
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}