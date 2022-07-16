import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export function Navbar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box>
              <Typography variant={'h4'}>Shop Retailer</Typography>
            </Box>
            <Box></Box>
            <Box>
              <Button>
                <Typography variant={'h4'}>Store</Typography>
              </Button>
              <Button>
                <Typography variant={'h4'}>Summary</Typography>
              </Button>
              <Button>
                <Typography variant={'h4'}>Reports</Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
