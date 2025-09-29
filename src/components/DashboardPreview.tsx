import { Typography, Container, Stack, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `
    radial-gradient(ellipse at 50% 0%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
    linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)
  `,
}));

const DashboardImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: `
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(0, 255, 136, 0.1)
  `,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: `
      0 30px 80px rgba(0, 0, 0, 0.6),
      0 0 0 1px rgba(0, 255, 136, 0.2)
    `,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 600,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  textAlign: "center",
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: "600px",
  margin: "0 auto",
}));

export default function DashboardPreview() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ px: { xs: 2, md: 0 } }}>
          <Box sx={{ textAlign: "center" }}>
            <SectionTitle variant="h2">See Your Data Come to Life</SectionTitle>
            <SectionSubtitle>
              Transform complex data into actionable insights with our intuitive
              AI-powered dashboard interface.
            </SectionSubtitle>
          </Box>

          <Box sx={{ width: "100%", maxWidth: { xs: '100%', md: '900px' } }}>
            <DashboardImage
              src="https://images.unsplash.com/photo-1587401511935-a7f87afadf2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBjaGFydHMlMjBpbnRlcmZhY2V8ZW58MHwwfHxibHVlfDE3NTkxNjExMjR8MA&ixlib=rb-4.1.0&q=85"
              alt="Modern AI analytics dashboard interface with charts, graphs, and data visualization by KOBU Agency on Unsplash"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </SectionContainer>
  );
}
