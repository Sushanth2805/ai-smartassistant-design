import { Typography, Container, Stack, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)",
}));

const BenefitItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.04)",
    border: `1px solid rgba(0, 255, 136, 0.2)`,
    transform: "translateX(10px)",
  },
}));

const BenefitIcon = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.primary.dark}20)`,
  border: `1px solid ${theme.palette.primary.main}40`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "& svg": {
    fontSize: "24px",
    color: theme.palette.primary.main,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  marginBottom: theme.spacing(6),
  color: theme.palette.text.primary,
  "& .highlight": {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
}));

const benefits = [
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "3x Faster Decision Making",
    description:
      "Reduce analysis time from hours to minutes with AI-powered insights and automated reporting.",
  },
  {
    icon: <LightbulbOutlinedIcon />,
    title: "Smart Insights Discovery",
    description:
      "Uncover hidden patterns and opportunities in your data that traditional tools miss.",
  },
  {
    icon: <AutoFixHighOutlinedIcon />,
    title: "Automated Workflows",
    description:
      "Eliminate repetitive tasks and focus on strategic decisions with intelligent automation.",
  },
];

export default function BenefitsSection() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={6}
          alignItems="center"
        >
          <Box sx={{ flex: 1 }}>
            <SectionTitle variant="h2">
              Transform Your Business with{" "}
              <span className="highlight">AI Intelligence</span>
            </SectionTitle>
          </Box>

          <Stack spacing={3} sx={{ flex: 1, width: "100%" }}>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 600,
                      mb: 1,
                      color: "text.primary",
                      fontSize: "1.25rem",
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Box>
              </BenefitItem>
            ))}
          </Stack>
        </Stack>
      </Container>
    </SectionContainer>
  );
}
