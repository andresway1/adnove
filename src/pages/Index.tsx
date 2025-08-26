import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Challenges } from "@/components/Challenges";
import { Solutions } from "@/components/Solutions";
import { PricingPlans } from "@/components/PricingPlans";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Challenges />
      <Solutions />
      <PricingPlans />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
