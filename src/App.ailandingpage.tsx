import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';
import Navigation from './components/Navigation';
import NotificationBanner from './components/NotificationBanner';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DashboardPreview from './components/DashboardPreview';
import BenefitsSection from './components/BenefitsSection';
import SocialProof from './components/SocialProof';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

const createEmotionCache = () => {
  return createCache({
    key: 'mui',
    prepend: true
  });
};

const emotionCache = createEmotionCache();

export default function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <NotificationBanner />
        <HeroSection />
        <FeaturesSection />
        <DashboardPreview />
        <BenefitsSection />
        <SocialProof />
        <PricingSection />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}