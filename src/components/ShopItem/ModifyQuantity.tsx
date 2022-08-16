import { FormControl } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Fragment, SyntheticEvent } from 'react'

export interface ModifyQuantityProps {
  quantity: number
}

export default function ModifyQuantity({ quantity }: ModifyQuantityProps) {
  return (
    <Fragment>
      <Button variant={'contained'} size={'small'} sx={{ borderRadius: '50%' }}>
        <Typography variant={'button'}>-</Typography>
      </Button>
      <FormControl
        sx={{
          marginLeft: 2,
          marginRight: 2,
          textAlign: 'center',
          width: '10ch',
        }}
      >
        <TextField
          inputProps={{ style: { textAlign: 'center' } }}
          value={quantity}
        />
      </FormControl>
      <Button variant={'contained'} size={'small'} sx={{ borderRadius: '50%' }}>
        <Typography variant={'button'}>+</Typography>
      </Button>
    </Fragment>
  )
}
