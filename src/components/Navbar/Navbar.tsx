import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <>
      <AppBar position={'absolute'}>
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant={'h4'}>Shop Retailer</Typography>
          </Box>
          <Box>
            <Button variant={'text'}>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Typography variant={'h6'} color={'whitesmoke'}>
                  Store
                </Typography>
              </Link>
            </Button>
            <Button variant={'text'}>
              <Link to={'/summary'} style={{ textDecoration: 'none' }}>
                <Typography variant={'h6'} color={'whitesmoke'}>
                  Summary
                </Typography>
              </Link>
            </Button>
            <Button variant={'text'}>
              <Link to={'/reports'} style={{ textDecoration: 'none' }}>
                <Typography variant={'h6'} color={'whitesmoke'}>
                  Reports
                </Typography>
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
