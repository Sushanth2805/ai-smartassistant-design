import { Typography, Container, Stack, Box, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #0A0A0A 0%, #000000 100%)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(8, 0, 4, 0)
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4)
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontSize: '0.95rem',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'none'
  }
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: '10px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    backgroundColor: 'rgba(0, 255, 136, 0.1)'
  }
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2)
}));

const footerSections = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'API', 'Documentation', 'Integrations']
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Partners']
  },
  {
    title: 'Resources',
    links: ['Help Center', 'Community', 'Guides', 'Webinars', 'Status']
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies', 'Compliance']
  }
];

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Main Footer Content */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="space-between"
          >
            {/* Brand Section */}
            <Box sx={{ maxWidth: '300px' }}>
              <Logo variant="h6">
                LOGO
              </Logo>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                Your smartest AI assistant for faster decisions and smarter workflows. 
                Transform your business with the power of artificial intelligence.
              </Typography>
              
              <Stack direction="row" spacing={2}>
                <SocialButton size="small">
                  <TwitterIcon fontSize="small" />
                </SocialButton>
                <SocialButton size="small">
                  <LinkedInIcon fontSize="small" />
                </SocialButton>
                <SocialButton size="small">
                  <GitHubIcon fontSize="small" />
                </SocialButton>
              </Stack>
            </Box>
            
            {/* Footer Links */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                gap: 4,
                flex: 1
              }}
            >
              {footerSections.map((section, index) => (
                <FooterSection key={index}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Stack spacing={1.5}>
                    {section.links.map((link, linkIndex) => (
                      <FooterLink key={linkIndex} href="#">
                        {link}
                      </FooterLink>
                    ))}
                  </Stack>
                </FooterSection>
              ))}
            </Stack>
          </Stack>
          
          {/* Bottom Section */}
          <Box
            sx={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              pt: 4,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary' }}
            >
              © 2024 LOGO. All rights reserved.
            </Typography>
            
            <Stack direction="row" spacing={3}>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </FooterContainer>
  );
}