import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowWeWork } from '@/components/home/HowWeWork';
import { ProductSection } from '@/components/home/ProductSection';
import { Testimonials } from '@/components/home/Testimonials';
import { TechStackSection } from '@/components/home/TechStackSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowWeWork />
      <ProductSection />
      <Testimonials />
      <TechStackSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
