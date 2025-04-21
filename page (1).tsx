import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Pro Performance Basketball",
    price: 89.99,
    rating: 4.8,
    reviewCount: 124,
    description:
      "The Pro Performance Basketball is designed for serious players who demand the best. Featuring a premium composite leather cover for excellent grip and durability, this basketball is suitable for both indoor and outdoor play. The deep channel design ensures consistent ball handling and precise control during gameplay.",
    features: [
      "Premium composite leather cover",
      "Deep channel design for better grip",
      "Official size and weight",
      "Suitable for indoor and outdoor courts",
      "Advanced moisture-wicking technology",
      "Excellent air retention",
    ],
    specifications: {
      Size: '7 (29.5")',
      Weight: "22 oz",
      Material: "Composite leather",
      Inflation: "7-9 PSI",
      Color: "Orange/Black",
      "Recommended Use": "Indoor/Outdoor",
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Orange", "Black", "Blue", "Red"],
    sizes: ['5 (27.5")', '6 (28.5")', '7 (29.5")'],
    stock: 15,
    category: "Basketball",
    brand: "MDM Sports",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden border">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden border cursor-pointer">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price}</div>

          <div>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:border-primary"
                  >
                    <span className="sr-only">{color}</span>
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color.toLowerCase() }}></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div
                    key={size}
                    className="px-4 py-2 border rounded-md cursor-pointer hover:border-primary hover:bg-primary/5"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button variant="outline" size="icon" className="rounded-r-none">
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="px-4 py-2 border-y w-12 text-center">1</div>
                <Button variant="outline" size="icon" className="rounded-l-none">
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="ml-4 text-sm text-gray-600">{product.stock} available</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1 gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Free shipping</p>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="py-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Product Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="py-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b pb-2">
                    <span className="font-medium w-1/3">{key}</span>
                    <span className="w-2/3">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Customer Reviews</h3>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold">{product.rating}</div>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Based on {product.reviewCount} reviews</p>
                </div>
              </div>

              <Button>Write a Review</Button>

              <div className="space-y-6 mt-8">
                {/* Sample reviews */}
                <div className="border-b pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Great basketball!</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">By John D. on March 15, 2023</p>
                  <p>
                    This basketball has excellent grip and durability. I've been using it for both indoor and outdoor
                    games, and it performs well in all conditions. Highly recommended!
                  </p>
                </div>

                <div className="border-b pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Good quality</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">By Sarah M. on February 8, 2023</p>
                  <p>
                    The basketball is well-made and has a nice feel. It holds air well and the grip is good. I would
                    have given 5 stars, but the color is slightly different than shown in the pictures.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
