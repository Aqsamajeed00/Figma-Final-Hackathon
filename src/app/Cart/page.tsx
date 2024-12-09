import React from "react";

const ShoppingCart = () => {
  return (
    <div>
      <section className="cart-container bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="cart-title text-2xl sm:text-3xl text-center lg:text-left">
          Your Shopping Cart
        </h1>
        <div className="cart-content grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Product Section */}
          <div className="product-section border-2 p-4">
            <h1 className="product-header text-lg font-semibold">Product</h1>
            <div className="product-item flex items-start justify-between mt-8">
              <div className="product-details flex">
                <img
                  src="/images/Product Image.png"
                  alt="Product 1"
                  className="product-image w-20 h-20 sm:w-28 sm:h-28"
                />
                <div className="product-description ml-6">
                  <h1 className="product-name text-base sm:text-lg font-medium">
                    Graystone vase
                  </h1>
                  <p className="product-info text-sm mt-2">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="product-price mt-2 text-base font-semibold">
                    £85
                  </p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="quantity-section flex flex-col items-center">
                <h1 className="quantity-header text-sm font-semibold sm:hidden lg:block">
                  Quantity
                </h1>
                <p className="quantity-value mt-2 text-lg font-medium">1</p>
              </div>
            </div>
            <div className="product-item flex items-start justify-between mt-8">
              <div className="product-details flex">
                <img
                  src="/images/Product Image 2.png"
                  alt="Product 2"
                  className="product-image w-20 h-20 sm:w-28 sm:h-28"
                />
                <div className="product-description ml-6">
                  <h1 className="product-name text-base sm:text-lg font-medium">
                    Basic white vase
                  </h1>
                  <p className="product-info text-sm mt-2">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="product-price mt-2 text-base font-semibold">
                    £85
                  </p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="quantity-section flex flex-col items-center">
                <h1 className="quantity-header text-sm font-semibold sm:hidden lg:block">
                  Quantity
                </h1>
                <p className="quantity-value mt-2 text-lg font-medium">1</p>
              </div>
            </div>
          </div>

          {/* Total Section (Hidden on Small Screens) */}
          <div className="total-section border-2 p-4 sm:hidden lg:block">
            <h1 className="total-header text-lg font-semibold">Total</h1>
            <p className="total-value mt-10 text-lg font-medium">£85</p>
            <p className="total-value mt-40 text-lg font-medium">£85</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="subtotal-section mt-10 text-center lg:text-right">
          <h1 className="subtotal-label inline text-lg sm:text-xl font-medium mr-4">
            Subtotal
          </h1>
          <h1 className="subtotal-value inline text-xl sm:text-2xl font-semibold">
            £210
          </h1>
          <p className="subtotal-info text-sm mt-4">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="checkout-button bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
            Go to checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
