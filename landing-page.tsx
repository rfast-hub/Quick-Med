import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, Dumbbell, Salad, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Quick Med</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">AI-Powered Health Optimization</h2>
          <p className="text-xl text-gray-600 mb-8">Personalized workout and nutrition plans based on your unique health data</p>
          <Button size="lg">Get Started</Button>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Brain className="h-12 w-12 text-blue-500" />}
              title="AI Analysis"
              description="Advanced AI analyzes your bloodwork and physical data"
            />
            <FeatureCard
              icon={<Dumbbell className="h-12 w-12 text-blue-500" />}
              title="Custom Workouts"
              description="Personalized workout plans tailored to your health goals"
            />
            <FeatureCard
              icon={<Salad className="h-12 w-12 text-blue-500" />}
              title="Nutrition Planning"
              description="AI-generated nutrition plans to complement your workouts"
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-blue-500" />}
              title="Food Counter"
              description="Track your calories and nutrients with our smart food counter"
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Input Your Data</h3>
                <p className="text-gray-600">Upload your bloodwork results and complete our AI-generated form</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our AI analyzes your data to create personalized plans</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Track & Improve</h3>
                <p className="text-gray-600">Follow your plans and track progress with our food counter</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="Free"
              features={[
                "AI health analysis",
                "Basic workout plans",
                "Basic nutrition advice",
                "Limited food counter entries"
              ]}
            />
            <PricingCard
              title="Pro"
              price="$15/month"
              features={[
                "Advanced AI health analysis",
                "Personalized workout plans",
                "Detailed nutrition plans",
                "Unlimited food counter entries",
                "Weekly progress reports"
              ]}
            />
            <PricingCard
              title="Premium"
              price="$30/month"
              features={[
                "Comprehensive AI health analysis",
                "Fully customized workout plans",
                "Advanced nutrition planning",
                "Unlimited food counter with AI insights",
                "24/7 expert support",
                "Monthly health consultations"
              ]}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Health?</h2>
            <p className="text-xl mb-8">Join Quick Med today and start your journey to better health</p>
            <Button size="lg" variant="secondary">Get Started Now</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Quick Med. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function PricingCard({ title, price, features }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-gray-500"> /month</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Activity className="h-5 w-5 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Choose Plan</Button>
      </CardFooter>
    </Card>
  )
}