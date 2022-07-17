import FindInPageIcon from '@mui/icons-material/FindInPage'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
export function NotFound() {
  return (
    <>
      <Box mt={10}>
        <Typography variant={'h3'}>
          The page you are looking for does not exist!{'   '}{' '}
          <FindInPageIcon fontSize={'large'} />
        </Typography>
      </Box>
    </>
  )
}
