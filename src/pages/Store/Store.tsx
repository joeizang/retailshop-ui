import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { ProductSearch } from '../../components/ProductSearch'
import { ShopItem } from '../../components/ShopItem/ShopItem'
import productsold from '../../productssold-demo-data.json'

export function Store() {
  const [productName, setProductName] = useState('')
  return (
    <>
      <Box mt={10}>
        <ProductSearch
          productName={productName}
          setProductName={setProductName}
        />
      </Box>
      <Box
        pt={5}
        display={'flex'}
        flexWrap={'wrap'}
        gap={3}
        mb={20}
        justifyContent={'center'}
      >
        <Grid container spacing={3}>
          {productsold.map((productsold) => (
            <Grid item key={`${new Date().toLocaleString()}-${productsold.Id}`}>
              <ShopItem
                productName={productsold.Name}
                productPrice={productsold.Price.toFixed(2).toString()}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
