import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Box from '@mui/material/Box'

export function ShopItem() {
  const [quantityControl, showQuantityControl] = useState(false)
  return (
    <>
      <Card elevation={3} sx={{ maxWidth: 375, borderRadius: 5 }}>
        <CardMedia
          component={'img'}
          height={150}
          image={'/img/shoppingbag.jpg'}
          alt="Shopping bag"
        />
        <CardContent>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant={'h6'}>Product Name</Typography>
            <Typography variant={'h6'}>Product Price</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ padding: 0 }}>
          <Button
            variant={'contained'}
            fullWidth
            size={'large'}
            sx={{ borderBottomRightRadius: 3 }}
          >
            <Typography variant={'button'} fontWeight={700}>
              Add To Cart
            </Typography>
          </Button>
          {/* <ModifyQuantity /> */}
        </CardActions>
      </Card>
    </>
  )
}
