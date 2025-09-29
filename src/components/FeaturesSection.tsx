import { Typography, Container, Stack, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)'
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: `1px solid rgba(0, 255, 136, 0.3)`,
    boxShadow: `0 20px 40px rgba(0, 255, 136, 0.1)`
  }
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '16px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '28px',
    color: theme.palette.primary.contrastText
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}));

const features = [
  {
    icon: <AnalyticsOutlinedIcon />,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your sales performance with AI-powered analytics and real-time reporting.'
  },
  {
    icon: <SmartToyOutlinedIcon />,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and focus on what matters most with intelligent workflow automation.'
  },
  {
    icon: <SpeedOutlinedIcon />,
    title: 'Lightning Fast',
    description: 'Process data and generate insights in seconds, not hours. Experience the speed of AI.'
  },
  {
    icon: <SecurityOutlinedIcon />,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
  }
];

export default function FeaturesSection() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Powerful Features for Modern Teams
        </SectionTitle>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} elevation={0}>
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.primary'
                }}
              >
                {feature.title}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}
              >
                {feature.description}
              </Typography>
            </FeatureCard>
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  );
}