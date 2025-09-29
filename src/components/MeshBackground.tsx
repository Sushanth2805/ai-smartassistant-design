import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const meshFlow = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) scale(1) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateX(-45%) translateY(-45%) scale(1.1) rotate(2deg);
    opacity: 0.6;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1) rotate(0deg);
    opacity: 0.3;
  }
`;

const meshFlow2 = keyframes`
  0% {
    transform: translateX(-30%) translateY(-60%) scale(0.8) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateX(-25%) translateY(-55%) scale(0.9) rotate(-1deg);
    opacity: 0.4;
  }
  100% {
    transform: translateX(-30%) translateY(-60%) scale(0.8) rotate(0deg);
    opacity: 0.2;
  }
`;

const meshPulse = keyframes`
  0%, 100% {
    opacity: 0.1;
    filter: brightness(1);
  }
  50% {
    opacity: 0.3;
    filter: brightness(1.2);
  }
`;

const MeshContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(ellipse at 70% 30%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 30% 70%, rgba(0, 204, 106, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(0, 255, 136, 0.08) 0%, transparent 40%)
    `,
    animation: `${meshPulse} 4s ease-in-out infinite`
  }
}));

const MeshLayer = styled('div')<{ layer: number }>(({ theme, layer }) => ({
  position: 'absolute',
  width: '150%',
  height: '150%',
  backgroundImage: layer === 1 
    ? `url('https://images.unsplash.com/photo-1664639986009-5e570f290319?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxtZXNoJTIwd2lyZWZyYW1lJTIwYWJzdHJhY3QlMjB3YXZlc3xlbnwwfDB8fGdyZWVufDE3NTkxNzA3NzJ8MA&ixlib=rb-4.1.0&q=85')`
    : `url('https://images.unsplash.com/photo-1616711823936-9de02bffaa6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxncmlkJTIwM2QlMjBwYXR0ZXJuJTIwY3VydmVzfGVufDB8MHx8Z3JlZW58MTc1OTE3MDc3Mnww&ixlib=rb-4.1.0&q=85')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  mixBlendMode: 'screen',
  filter: `
    hue-rotate(${layer === 1 ? '0deg' : '10deg'}) 
    brightness(${layer === 1 ? '0.8' : '0.6'}) 
    contrast(1.2) 
    saturate(1.5)
  `,
  animation: layer === 1 
    ? `${meshFlow} 12s ease-in-out infinite`
    : `${meshFlow2} 16s ease-in-out infinite reverse`,
  opacity: layer === 1 ? 0.4 : 0.25,
  top: '50%',
  left: '50%',
  transform: `translateX(-50%) translateY(-50%) scale(${layer === 1 ? '1' : '0.8'})`
}));

const GridOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `
    linear-gradient(90deg, transparent 0%, rgba(0, 255, 136, 0.03) 50%, transparent 100%),
    linear-gradient(0deg, transparent 0%, rgba(0, 255, 136, 0.03) 50%, transparent 100%)
  `,
  backgroundSize: '100px 100px',
  animation: `${meshPulse} 6s ease-in-out infinite`,
  opacity: 0.3
}));

const ParticleLayer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `
    radial-gradient(circle at 20% 30%, rgba(0, 255, 136, 0.8) 1px, transparent 1px),
    radial-gradient(circle at 80% 20%, rgba(0, 204, 106, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 40% 70%, rgba(0, 255, 136, 0.4) 1px, transparent 1px),
    radial-gradient(circle at 90% 80%, rgba(0, 204, 106, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 10% 90%, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
  `,
  backgroundSize: '200px 200px, 300px 300px, 250px 250px, 180px 180px, 220px 220px',
  animation: `${meshFlow} 20s linear infinite`,
  opacity: 0.6
}));

export default function MeshBackground() {
  return (
    <MeshContainer>
      <MeshLayer layer={1} />
      <MeshLayer layer={2} />
      <GridOverlay />
      <ParticleLayer />
    </MeshContainer>
  );
}