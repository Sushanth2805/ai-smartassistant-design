import { useState } from 'react';
import { Alert, IconButton, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const StyledAlert = styled(Alert)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '50px',
  color: theme.palette.text.primary,
  backdropFilter: 'blur(10px)',
  padding: '8px 20px',
  '& .MuiAlert-message': {
    padding: 0
  },
  '& .MuiAlert-action': {
    padding: 0,
    marginRight: 0
  }
}));

const NotificationText = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  color: theme.palette.text.secondary
}));

export default function NotificationBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Stack direction="row" justifyContent="center" sx={{ mt: 10, mb: 2 }}>
      <StyledAlert
        severity="info"
        action={
          <IconButton
            size="small"
            onClick={() => setVisible(false)}
            sx={{ 
              color: 'inherit',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <ClearOutlinedIcon fontSize="small" />
          </IconButton>
        }
      >
        <NotificationText>
          Series D funding round was closed
        </NotificationText>
      </StyledAlert>
    </Stack>
  );
}