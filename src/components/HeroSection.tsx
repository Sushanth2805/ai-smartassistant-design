import { Typography, Button, Stack, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `
    radial-gradient(ellipse at 80% 20%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 20% 80%, rgba(0, 204, 106, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)
  `,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 70% 30%, rgba(0, 255, 136, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 30% 70%, rgba(0, 204, 106, 0.06) 0%, transparent 40%)
    `,
    animation: 'gradientFlow 8s ease-in-out infinite alternate'
  },
  '@keyframes gradientFlow': {
    '0%': {
      transform: 'scale(1) rotate(0deg)'
    },
    '100%': {
      transform: 'scale(1.1) rotate(5deg)'
    }
  }
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  lineHeight: 1.1,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  '& .highlight': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  maxWidth: '600px'
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '14px 32px',
  borderRadius: '50px',
  transition: 'all 0.3s ease',
  boxShadow: `0 4px 20px rgba(0, 255, 136, 0.3)`,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 30px rgba(0, 255, 136, 0.4)`,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
  }
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1.1rem',
  padding: '14px 0',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  textDecorationThickness: '2px',
  textDecorationColor: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecorationColor: theme.palette.primary.light,
    color: theme.palette.primary.light
  }
}));

export default function HeroSection() {
  return (
    <HeroContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="flex-start" sx={{ maxWidth: '800px' }}>
          <HeroTitle variant="h1">
            Your smartest AI assistant{' '}
            <span className="highlight">work faster and smarter</span>
          </HeroTitle>
          
          <HeroSubtitle>
            Smarter sales, faster decisions. AI powered dashboard with 
            call analytics, transcripts, summaries and more.
          </HeroSubtitle>
          
          <Stack direction="row" spacing={3} alignItems="center">
            <PrimaryButton
              endIcon={<ArrowForwardIosOutlinedIcon />}
            >
              GET STARTED
            </PrimaryButton>
            
            <SecondaryButton>
              DISCOVER MORE
            </SecondaryButton>
          </Stack>
        </Stack>
      </Container>
    </HeroContainer>
  );
}