import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeaturedProducts from "@/components/featured-products"
import CategorySection from "@/components/category-section"
import HeroSection from "@/components/hero-section"
import BrandsSection from "@/components/brands-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <div className="relative mb-12">
          <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-100"></div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6">
              <h2 className="text-3xl font-bold tracking-tight">Featured Categories</h2>
            </div>
          </div>
        </div>

        <CategorySection />

        <div className="relative my-12">
          <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-100"></div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6">
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            </div>
          </div>
        </div>

        <FeaturedProducts />

        <div className="relative my-12">
          <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-100"></div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6">
              <h2 className="text-3xl font-bold tracking-tight">Top Brands</h2>
            </div>
          </div>
        </div>

        <BrandsSection />

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
            <p className="text-gray-600">Stay updated with the latest products and exclusive offers</p>
          </div>
          <div className="flex max-w-md mx-auto gap-2">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
