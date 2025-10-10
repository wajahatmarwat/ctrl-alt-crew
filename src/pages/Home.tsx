import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Brain, Bot, Code, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import KeyboardLogo from '@/components/KeyboardLogo';
import heroImage from '@/assets/hero-bg.jpg';
import aiIcon from '@/assets/ai-icon.png';
import chatbotIcon from '@/assets/chatbot-icon.png';
import webDevIcon from '@/assets/web-dev-icon.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <KeyboardLogo size="xl" className="justify-center mb-8" />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Restart Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We debug life's glitches and reboot old ideas into bold AI-powered solutions.
              Your geeky partners for next-gen software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover text-lg px-8 py-4"
              >
                <Link to="/contact">Launch Project</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
              >
                <Link to="/portfolio">View Our Code <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground">
              From AI wizardry to full-stack sorcery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-colors glow-hover">
              <CardContent className="p-8 text-center">
                <img src={aiIcon} alt="AI Services" className="w-16 h-16 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-4">AI & Data Science</h3>
                <p className="text-muted-foreground">
                  Machine learning models that actually learn (unlike some developers we know)
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary transition-colors glow-hover">
              <CardContent className="p-8 text-center">
                <img src={webDevIcon} alt="Web Development" className="w-16 h-16 mx-auto mb-4 animate-float" style={{ animationDelay: '2s' }} />
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-muted-foreground">
                  Responsive sites that work on everything except Internet Explorer (we have standards)
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary transition-colors glow-hover">
              <CardContent className="p-8 text-center">
                <img src={chatbotIcon} alt="Chatbots" className="w-16 h-16 mx-auto mb-4 animate-float" style={{ animationDelay: '4s' }} />
                <h3 className="text-xl font-bold mb-4">Chatbots & Automation</h3>
                <p className="text-muted-foreground">
                  Bots so smart, they'll probably ask for a raise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Reboot Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's turn your "it works on my machine" into "it works everywhere"
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4"
          >
            <Link to="/contact">Start Debugging with Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;