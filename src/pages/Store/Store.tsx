import Box from '@mui/material/Box'
import { ProductSearch } from '../../components/ProductSearch'
import { ShopItem } from '../../components/ShopItem/ShopItem'

export function Store() {
  return (
    <>
      <Box mt={10}>
        <ProductSearch />
      </Box>
      <Box pt={5}>
        <ShopItem />
      </Box>
    </>
  )
}
