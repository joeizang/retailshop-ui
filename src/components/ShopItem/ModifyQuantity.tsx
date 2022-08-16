import { FormControl } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Fragment } from 'react'

export interface ModifyQuantityProps {
  quantity: number
  dispatchQuantityUpdate: React.Dispatch<{ type: 'increment' | 'decrement' }>
}

export default function ModifyQuantity({
  quantity,
  dispatchQuantityUpdate,
}: ModifyQuantityProps) {
  return (
    <Fragment>
      <Button
        variant={'contained'}
        size={'small'}
        sx={{ borderRadius: '50%' }}
        onClick={() => dispatchQuantityUpdate({ type: 'decrement' })}
      >
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
      <Button
        variant={'contained'}
        size={'small'}
        sx={{ borderRadius: '50%' }}
        onClick={() => dispatchQuantityUpdate({ type: 'increment' })}
      >
        <Typography variant={'button'}>+</Typography>
      </Button>
    </Fragment>
  )
}
