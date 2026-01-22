import { Phone, Search,ShoppingCart } from "lucide-react";


function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-amber-50 ">
        <div className="bg-amber-700 text-primary-foreground py-4 px-8">
          <div className=" mx-auto text-white  flex flex-col items-start md:items-center justify-between md:text-xl text-sm">
            <div className="flex flex-col md:items-center md:flex-row gap 2 items-start md:gap-32">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+880 1321 208940</span>
              </div>
              <div className=" flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-black">Hotline: 09642-922922</span>
              </div>
            </div>
            <div className=" ">Free shipping on orders over ৳500</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-black md:gap-6 px-2 md:px-8 py-2">
          <div className="h-10 w-auto gap-2 rounded-full bg-accent flex items-center justify-center">
            <span className="text-2xl bg-amber-500 font-bold rounded-full p-2 text-accent-foreground">
              🌿
            </span>
            <h4 className=" text-sm md:text-2xl font-bold">Organic Bazaar</h4>
          </div>

          <div className=" md:flex flex-1 max-w-xl mx-8 py-4 hidden">
            <div className="relative w-full border rounded-2xl  hover:border-amber-600 focus-within:border-amber-900 px-3 py-1 flex items-center">
              <Search className="absolute left-3   h-4 w-4 " />
              <input
                placeholder="Search for organic products..."
                className="pl-10 w-full outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex items-center md:gap-6 pr-4 gap-2 ">
            <button
              variant="outline"
              size="sm"
              className=" flex items-center  border hover:text-white  gap-2"
            >
              <Phone className="h-4 w-4" />
              Contact
            </button>

            <button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {/* {getTotalItems() > 0 && ( */}
              <span className="absolute -top-1 -right-1/9 h-5 w-5 bg-amber-600 rounded-full  text-xs flex items-center justify-center">
                1{/* {getTotalItems()} */}
              </span>
              {/* // )} */}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
