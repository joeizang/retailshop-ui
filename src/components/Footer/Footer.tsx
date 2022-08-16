import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'

export interface FooterProps {
  businessName?: string
}

export function Footer({ businessName }: FooterProps) {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100vw',
          color: 'whitesmoke',
          textAlign: 'center',
          background: blue[600],
        }}
      >
        <Typography variant={'subtitle1'}>
          Copyright {businessName ?? 'Some Business '}
        </Typography>
      </Box>
    </>
  )
}
