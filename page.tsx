import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Filter } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Pro Performance Basketball",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Basketball",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Ultra Lightweight Running Shoes",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Running",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Premium Tennis Racket",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Tennis",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Professional Football",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Football",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Adjustable Dumbbell Set",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fitness",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Waterproof Hiking Backpack",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Outdoor",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Compression Training Shirt",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fitness",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Yoga Mat Premium",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fitness",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Mountain Bike Helmet",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Outdoor",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Swimming Goggles Pro",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Swimming",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Golf Club Set",
    price: 499.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Golf",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Boxing Gloves",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Boxing",
    rating: 4.7,
  },
]

const categories = [
  "All Categories",
  "Basketball",
  "Running",
  "Tennis",
  "Football",
  "Fitness",
  "Outdoor",
  "Swimming",
  "Golf",
  "Boxing",
]

const brands = ["Nike", "Adidas", "Under Armour", "Puma", "New Balance", "Reebok"]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <Button variant="ghost" size="sm" className="text-sm">
                Reset All
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox id={`category-${category}`} />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-4">
                  <Slider defaultValue={[0, 500]} max={1000} step={10} />
                  <div className="flex items-center justify-between">
                    <div className="w-20">
                      <Input type="number" placeholder="Min" />
                    </div>
                    <span>-</span>
                    <div className="w-20">
                      <Input type="number" placeholder="Max" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox id={`brand-${brand}`} />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="ml-2 text-sm font-medium leading-none flex items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <div className="flex mr-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        & Up
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center">
              <Button variant="outline" size="sm" className="mr-2 lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <p className="text-sm text-gray-500">Showing {products.length} products</p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select defaultValue="featured">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <div className="text-lg font-bold">${product.price}</div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex">
              <Button variant="outline" size="icon" className="rounded-r-none">
                &lt;
              </Button>
              <Button variant="outline" size="sm" className="rounded-none bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm" className="rounded-none">
                2
              </Button>
              <Button variant="outline" size="sm" className="rounded-none">
                3
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
