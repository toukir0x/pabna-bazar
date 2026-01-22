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
  // const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation - Horizontal */}
      <nav className="hidden md:block bg-card border-b sticky top-[136px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className="whitespace-nowrap flex items-center gap-2"
                onClick={() => setSelectedCategory(category.id)}
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
          {/* <Sheet open={open} onOpenChange={setOpen}> */}
            <div asChild>
              <button variant="outline" className="w-full flex items-center justify-between bg-transparent">
                <div className="flex items-center gap-2">
                  <Menu className="h-4 w-4" />
                  <span>
                    {categories.find((c) => c.id === selectedCategory)?.icon}{" "}
                    {categories.find((c) => c.id === selectedCategory)?.name}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div side="left" className="w-[280px]">
              <div>
                <h3>Categories</h3>
              </div>
              <div className="flex flex-col gap-2 mt-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-start flex items-center gap-3"
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setOpen(false)
                    }}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          {/* </Sheet> */}
        </div>
      </div>
    </>
  )
}
