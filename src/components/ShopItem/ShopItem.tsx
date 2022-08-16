import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { useReducer, useRef } from 'react'
import Box from '@mui/material/Box'
import ModifyQuantity from './ModifyQuantity'

export function ShopItem() {
  const [quantityControl, showQuantityControl] = useReducer(
    (prev) => !prev,
    false,
  )
  const [quantity, updateQuantity] = useReducer(
    (state: number, action: { type: 'increment' | 'decrement' }) => {
      switch (action.type) {
        case 'increment':
          return state + 1
        case 'decrement':
          return state - 1
      }
    },
    1,
  )
  return (
    <>
      <Card elevation={3} sx={{ maxWidth: 300, borderRadius: 5 }}>
        <CardMedia
          component={'img'}
          height={150}
          image={'/img/shoppingbag.jpg'}
          alt="Shopping bag"
        />
        <CardContent>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant={'subtitle2'}>Product Name</Typography>
            <Typography variant={'subtitle2'}>Product Price</Typography>
          </Box>
          {quantityControl && (
            <Box display={'flex'} justifyContent={'space-between'}>
              <ModifyQuantity
                quantity={quantity}
                dispatchQuantityUpdate={updateQuantity}
              />
            </Box>
          )}
        </CardContent>
        <CardActions sx={{ padding: 0 }}>
          <Button
            variant={'contained'}
            fullWidth
            size={'large'}
            sx={{ borderBottomRightRadius: 3 }}
            onClick={showQuantityControl}
          >
            <Typography variant={'button'} fontWeight={700}>
              Add To Cart
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
