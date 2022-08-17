import FormControl from '@mui/material/FormControl'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import { Dispatch, FormEvent, useEffect } from 'react'
import { useDebounce } from '../../utilities/customHooks/useDebounce'
import { PageHeading } from '../PageHeading'

export interface ProductSearchProps {
  productName: string
  setProductName: Dispatch<React.SetStateAction<string>>
}

export function ProductSearch({
  productName,
  setProductName,
}: ProductSearchProps) {
  const debouncedTerm = useDebounce(productName, 300)

  useEffect(() => {
    if (debouncedTerm) {
      console.log({ debouncedTerm })
    }
  }, [debouncedTerm])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => setProductName(e.target.value)
  return (
    <>
      <PageHeading headingText={'Store Front'} />
      <Paper sx={{ height: 150, borderRadius: 3, padding: 3 }} elevation={3}>
        <FormControl fullWidth={false} sx={{ width: '95%', padding: 3 }}>
          <TextField
            placeholder="Search for products by name..."
            label={'Product Search'}
            onChange={handleChange}
          />
        </FormControl>
      </Paper>
    </>
  )
}
