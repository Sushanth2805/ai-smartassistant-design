import { Typography, Container, Stack, Box, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)'
}));

const PricingCard = styled(Paper)<{ featured?: boolean }>(({ theme, featured }) => ({
  background: featured 
    ? `linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 106, 0.05) 100%)`
    : 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: featured 
    ? `2px solid ${theme.palette.primary.main}`
    : '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: theme.spacing(3),
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: featured 
      ? `linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 204, 106, 0.08) 100%)`
      : 'rgba(255, 255, 255, 0.05)',
    boxShadow: featured
      ? `0 20px 40px rgba(0, 255, 136, 0.2)`
      : `0 20px 40px rgba(0, 0, 0, 0.3)`
  }
}));

const PopularBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-12px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: '6px 20px',
  borderRadius: '20px',
  fontSize: '0.875rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
}));

const PriceButton = styled(Button)<{ featured?: boolean }>(({ theme, featured }) => ({
  background: featured 
    ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
    : 'rgba(255, 255, 255, 0.1)',
  color: featured ? theme.palette.primary.contrastText : theme.palette.text.primary,
  border: featured ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
  textTransform: 'none',
  fontWeight: 600,
  padding: '12px 24px',
  borderRadius: '12px',
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: featured 
      ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
      : 'rgba(255, 255, 255, 0.15)',
    transform: 'translateY(-2px)'
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary
}));

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic analytics dashboard',
      'Email support',
      '10GB storage',
      'Standard integrations'
    ]
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Advanced features for growing businesses',
    features: [
      'Up to 25 team members',
      'Advanced AI analytics',
      'Priority support',
      '100GB storage',
      'Custom integrations',
      'Advanced reporting',
      'API access'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'Complete solution for large organizations',
    features: [
      'Unlimited team members',
      'Full AI suite',
      '24/7 dedicated support',
      'Unlimited storage',
      'Custom development',
      'White-label options',
      'SLA guarantee'
    ]
  }
];

export default function PricingSection() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h2">
            Choose Your Plan
          </SectionTitle>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Start free and scale as you grow. All plans include our core AI features.
          </Typography>
        </Box>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3
          }}
        >
          {plans.map((plan, index) => (
            <PricingCard key={index} elevation={0} featured={plan.featured}>
              {plan.featured && (
                <PopularBadge>
                  Most Popular
                </PopularBadge>
              )}
              
              <Stack spacing={3}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1
                    }}
                  >
                    {plan.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary' }}
                  >
                    {plan.description}
                  </Typography>
                </Box>
                
                <Box>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 700,
                        color: plan.featured ? 'primary.main' : 'text.primary'
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
                    >
                      {plan.period}
                    </Typography>
                  </Stack>
                </Box>
                
                <Stack spacing={2}>
                  {plan.features.map((feature, featureIndex) => (
                    <Stack key={featureIndex} direction="row" spacing={2} alignItems="center">
                      <CheckOutlinedIcon
                        sx={{
                          color: 'primary.main',
                          fontSize: '20px',
                          flexShrink: 0
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                      >
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                
                <PriceButton featured={plan.featured}>
                  Get Started
                </PriceButton>
              </Stack>
            </PricingCard>
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  );
}