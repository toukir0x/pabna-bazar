import React from 'react'
// import { useCart } from '../hooks/useCart.jsx'
import { Minus, Plus, Trash2, ShoppingBag, X } from 'lucide-react'


const Cart = () => {

    // const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart, proceedToCheckout } = useCart()
    const cart = [
    { id: 1, name: "Product 1", price: 100, quantity: 2, image: "src/assets/image/organic-honey-bottles-product-photography.jpg" },
    { id: 2, name: "Product 2", price: 200, quantity: 1, image: "src/assets/image/organic-honey-bottles-product-photography.jpg" }, 
    ];

     if (cart.length === 0) {
       return (
         <>
           <div>
             <title>Shopping Cart</title>
           </div>
           <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
             <ShoppingBag className="h-24 w-24 text-muted-foreground" />
             <p className="text-lg text-muted-foreground">Your cart is empty</p>
             {/* <button onClick={onClose}>Continue Shopping</button> */}
           </div>
         </>
       );
     }

  return (
    <>
      <div className="flex flex-col h-full w-8/10 ml-auto bg-gray-400/10 rounded-lg shadow-md p-4 gap-6 ">
        <div className="flex items-center justify-between  pb-4 relative">
            <p>Shopping Cart</p>
            <X className='absolute top-3 right-4 ' />
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:w-8/12 sm:mx-right-auto sm:ml-auto">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-500/5 p-4 border rounded-lg"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="flex-1 flex-col ">
                  <h4 className="font-semibold text-sm line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="text-xl font-bold text-amber-700">
                    ৳ {item.price.toLocaleString()}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      variant="outline"
                      size="icon"
                      className="h-8 w-7 bg-transparent items-center p-2! text-center"
                      //   onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      variant="outline"
                      size="icon"
                      className="h-8 w-7 bg-transparent p-2!"
                      //   onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                    <button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 ml-auto p-2! text-red-800"
                      //   onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 " />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4 space-y-4 flex flex-col pr-2">
          <div className="space-y-2  items-end  flex flex-col ">
            <div className="flex gap-6 text-sm">
              <span>Subtotal</span>33
              {/* <span>৳ {getTotalPrice().toLocaleString()}</span> */}
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>Shipping</span>44
              {/* <span>{getTotalPrice() > 500 ? "FREE" : "৳ 50"}</span> */}
            </div>
            {/* <Separator /> */}

            <div className="flex gap-6 text-lg font-bold border-t pt-2">
              <span>Total</span>
              <span className="text-primary">
                ৳ 55
                {/* {(
                  getTotalPrice() + (getTotalPrice() > 500 ? 0 : 50)
                ).toLocaleString()} */}
              </span>
            </div>
          </div>

          <div className="space-y-2 flex flex-col items-end">
            <button
              className="inline-block w-48 text-center"
              size="lg"
              //   onClick={() => {
              //     proceedToCheckout();
              //     onClose();
              //   }}
            >
              Proceed to Checkout
            </button>
            <button
              variant="outline"
              className=" bg-transparent w-48"
              //   onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart