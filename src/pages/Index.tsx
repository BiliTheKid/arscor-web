
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, Linkedin, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/arscor-logo.png" alt="Arscor" className="h-10 arscor-logo" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="#solutions" className="text-foreground hover:text-primary transition-colors">Solutions</Link>
            <Link to="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</Link>
            <Link to="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link to="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Digital Assets Into Revenue
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We allow digital asset owners to monetize their traffic into revenues.
                We support our partners' efforts, helping them grow, and creating a successful source of income.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="#contact">
                    Get Started <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-blue-100/50 animate-pulse"></div>
                <img 
                  src="/arscor-logo.png" 
                  alt="Arscor" 
                  className="relative w-64 h-64 lg:w-80 lg:h-80 object-contain arscor-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Solutions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how Arscor can help you monetize your digital assets and generate sustainable revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Traffic Monetization</h3>
                <p className="text-muted-foreground">
                  Convert your visitor traffic into a sustainable revenue stream with our optimized monetization solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Growth Strategy</h3>
                <p className="text-muted-foreground">
                  Comprehensive strategies to grow your audience and maximize the potential of your digital assets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Optimization Services</h3>
                <p className="text-muted-foreground">
                  Data-driven optimization to ensure your assets are performing at their maximum potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Benefits of Working with Arscor</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Partner with us and experience the advantages of our comprehensive approach to digital asset monetization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Increased Revenue</h3>
                <p className="text-muted-foreground">
                  Our approach is designed to maximize your earning potential through optimized monetization strategies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our team of industry experts will guide you through every step of the monetization process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                <p className="text-muted-foreground">
                  We create customized strategies based on your unique assets and audience characteristics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Reporting</h3>
                <p className="text-muted-foreground">
                  Access comprehensive reports and analytics to track your performance and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our streamlined process makes monetizing your digital assets simple and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="p-6 bg-white rounded-lg shadow-md relative z-10 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Connect</h3>
                <p className="text-muted-foreground">
                  Reach out to our team to discuss your digital assets and monetization goals.
                </p>
              </div>
              <div className="absolute top-1/2 left-full h-0.5 w-8 bg-gray-200 hidden md:block"></div>
            </div>

            <div className="relative">
              <div className="p-6 bg-white rounded-lg shadow-md relative z-10 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategize</h3>
                <p className="text-muted-foreground">
                  Our experts will develop a customized monetization strategy for your specific needs.
                </p>
              </div>
              <div className="absolute top-1/2 left-full h-0.5 w-8 bg-gray-200 hidden md:block"></div>
            </div>

            <div className="relative">
              <div className="p-6 bg-white rounded-lg shadow-md relative z-10 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Grow & Earn</h3>
                <p className="text-muted-foreground">
                  Implement our solutions and start generating sustainable revenue from your digital assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Ready to Monetize Your Digital Assets?
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-8">
                Contact us today to learn how Arscor can help you transform your traffic into revenue.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="mailto:contact@arscor.com">
                    Contact Us <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#solutions">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src="/arscor-logo.logo" alt="Arscor" className="h-10 arscor-logo" />
              <p className="mt-4 text-sm text-muted-foreground">
                Monetize your digital assets with Arscor.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-3">Connect With Us</h3>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <MessageSquare size={24} />
                    <span className="sr-only">Microsoft Teams</span>
                  </a>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-3">Contact</h3>
                <p className="text-muted-foreground">contact@arscor.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Arscor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
