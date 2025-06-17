/**
 * Guitar component
 * Renders a single guitar card with image, name, description, price, and add-to-cart button.
 *
 * Props:
 * - guitar: object containing name, description, price, and image
 * - addToCart: function to add this guitar to the cart
 */
export default function Guitar({ guitar, addToCart }) {
    // Destructure guitar properties
    const { name, description, price, image } = guitar;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            {/* Guitar image */}
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>

            {/* Guitar details and add-to-cart button */}
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">$.{price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}