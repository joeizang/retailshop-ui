import Box from '@mui/material/Box'
import { useState } from 'react'
import { ProductSearch } from '../../components/ProductSearch'
import { ShopItem } from '../../components/ShopItem/ShopItem'

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
      <Box pt={5}>
        <ShopItem />
      </Box>
    </>
  )
}
