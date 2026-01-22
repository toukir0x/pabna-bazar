import { Badge } from 'lucide-react';
import { X } from 'lucide-react';
import React from 'react'

import { Minus, Plus } from 'lucide-react';


const ProductModal = () => {
    const product = {
      name: "tea",
      price: 150,
      originalPrice: 200,
      image:
        "src/assets/image/organic-honey-bottles-product-photography.jpg",
      badge: "On Sale",
    };

    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100): 0;

     const [quantity, setQuantity] = React.useState(1);
  return (
    <>
      <div className="p-6">
        <div className=" relative p-6 max-w-3xl border-gray-400 max-h-[90vh]  overflow-y-auto shadow-2xl border-2 mx-auto rounded-2xl bg-white ">
          <X className='absolute top-3 right-4 '/>
          <div>
            <div className="text-2xl">{product.name}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              {product.badge && (
                <Badge
                  className="absolute top-4 left-4 z-10"
                  variant={
                    product.badge === "On Sale"
                      ? `className="text-red-600 stroke-1"`
                      : "secondary"
                  }
                >
                  {product.badge}
                </Badge>
              )}
              {discount > 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="h-16 w-16 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-bold leading-none">
                        {discount}%
                      </div>
                      <div className="text-xs leading-none">OFF</div>
                    </div>
                  </div>
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-amber-600 font-bold text-primary">
                    ৳ {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ৳ {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <p className="text-sm text-destructive font-semibold">
                    Save ৳{" "}
                    {(product.originalPrice - product.price).toLocaleString()}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Product Description</h3>
                <p className="text-muted-foreground">
                  Premium quality organic product sourced directly from
                  certified organic farms. 100% natural, no preservatives or
                  artificial additives. Rich in nutrients and antioxidants for a
                  healthy lifestyle.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Benefits</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>100% Organic & Natural</li>
                  <li>No Artificial Additives</li>
                  <li>Rich in Nutrients</li>
                  <li>Ethically Sourced</li>
                </ul>
              </div>

              <div className="space-y-3">
                <label className="font-semibold">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                // onClick={handleAddToCart}
                size="lg"
                className="w-full text-lg bg-gray-900"
              >
                Add to Cart - ৳ {(product.price * quantity).toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal