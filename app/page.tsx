import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BarChart3, Brain, FileText, Mail, Target, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">SignalPath</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Find Your Next
            <span className="text-blue-600"> Opportunity</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            SignalPath uses AI to analyze your skills, preferences, and market trends to surface the most relevant opportunities for your career growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Finding Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How SignalPath Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI-powered platform connects your unique profile with the right opportunities at the right time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600">
                  Advanced algorithms analyze your skills, experience, and preferences to find opportunities that truly fit.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600">
                  Get curated opportunities based on your career goals, salary expectations, and growth aspirations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600">
                  Stay ahead with real-time market trends, salary data, and industry insights to make informed decisions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have discovered their ideal career paths with SignalPath.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">SignalPath</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                AI-powered career opportunity discovery platform helping professionals find their next big break.
              </p>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <a 
                  href="mailto:hello@signalpath.ai" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  hello@signalpath.ai
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-slate-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-slate-400 hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500">
              © {new Date().getFullYear()} SignalPath. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}