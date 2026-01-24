"use client"

import { useState } from "react"
import { ChevronDown, Menu } from "lucide-react"

const categories = [
  { id: "all", name: "All Products", icon: "🛒" },
  { id: "honey", name: "Honey & Bee Products", icon: "🍯" },
  { id: "oil", name: "Oils & Ghee", icon: "🫒" },
  { id: "spices", name: "Spices & Herbs", icon: "🌶️" },
  { id: "dates", name: "Dates & Dry Fruits", icon: "🌰" },
  { id: "beverages", name: "Tea & Beverages", icon: "🍵" },
  { id: "pantry", name: "Pantry Essentials", icon: "🧂" },
  { id: "wellness", name: "Health & Wellness", icon: "💊" },
]

export function CategoryNav({ selectedCategory, setSelectedCategory }) {
  const [open, setOpen] = useState(false)
  
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Horizontal */}
      <nav className="hidden md:block border-b sticky z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className={`whitespace-nowrap flex items-center gap-2  ${selectedCategory === category.id ? " bg-amber-600! text-amber-100" : "text-black"}`}
                onClick={() => (
                  setSelectedCategory(category.id),
                  setIsActive(!isActive)
                )}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Vertical Sidebar */}
      <div className="md:hidden sticky top-[136px] z-40  border-b">
        <div className="container mx-auto px-4 py-3">
          
            <button
              variant="outline"
            className="w-full flex items-center justify-between bg-transparent"
              onClick={() => setOpen(!open)}
            >
              <div className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                <span>
                  {categories.find((c) => c.id === selectedCategory)?.icon}{" "}
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>
          
          <div className={` ${open ? "flex flex-col gap-2 mt-4" : "hidden" }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className={`whitespace-nowrap flex items-center gap-2  ${selectedCategory === category.id ? " bg-amber-600! text-amber-100" : "text-black"}`}
                onClick={() => (
                  setSelectedCategory(category.id),
                  setOpen(false)
                )}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))} 
          </div>
        </div>
      </div>
    </>
  );
}
