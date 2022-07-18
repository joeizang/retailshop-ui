import FormControl from '@mui/material/FormControl'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import { SyntheticEvent, useState } from 'react'

export function ProductSearch() {
  const [productName, setProductName] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doDebouncedSearch = (evt: any) => {
    console.log({ evt })
    console.log(evt.target.value)
    setProductName(evt.target.value)
  }
  return (
    <>
      <Paper sx={{ height: 200, borderRadius: 3, padding: 3 }}>
        <FormControl fullWidth={false} sx={{ width: '95%', padding: 3 }}>
          <TextField
            placeholder="Search for products by name..."
            label={'Product Search'}
            value={productName}
            onChange={doDebouncedSearch}
          />
        </FormControl>
      </Paper>
    </>
  )
}
