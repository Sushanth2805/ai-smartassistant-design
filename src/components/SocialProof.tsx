import { Typography, Container, Stack, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `
    radial-gradient(ellipse at 30% 50%, rgba(0, 255, 136, 0.03) 0%, transparent 50%),
    linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)
  `
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: `1px solid rgba(0, 255, 136, 0.2)`
  }
}));

const StatsCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  color: theme.palette.text.primary
}));

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Sales, TechCorp',
    content: 'This AI assistant has revolutionized our sales process. We\'re closing deals 40% faster and our team productivity has skyrocketed.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'Data Analyst, InnovateLab',
    content: 'The insights we get from this platform are incredible. It\'s like having a data scientist working 24/7 for our team.',
    rating: 5
  },
  {
    name: 'Emily Johnson',
    role: 'CEO, StartupX',
    content: 'Game-changing technology. The automated reports save us hours every week and the accuracy is phenomenal.',
    rating: 5
  }
];

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '40%', label: 'Faster Decisions' },
  { value: '24/7', label: 'AI Support' }
];

export default function SocialProof() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Trusted by Industry Leaders
        </SectionTitle>
        
        <Stack spacing={6}>
          {/* Testimonials */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} elevation={0}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={0.5}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarOutlinedIcon
                        key={i}
                        sx={{ color: 'primary.main', fontSize: '20px' }}
                      />
                    ))}
                  </Stack>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontStyle: 'italic'
                    }}
                  >
                    "{testimonial.content}"
                  </Typography>
                  
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary'
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
              </TestimonialCard>
            ))}
          </Stack>
          
          {/* Stats */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              gap: 3,
              mt: 4
            }}
          >
            {stats.map((stat, index) => (
              <StatsCard key={index}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 1
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {stat.label}
                </Typography>
              </StatsCard>
            ))}
          </Stack>
        </Stack>
      </Container>
    </SectionContainer>
  );
}