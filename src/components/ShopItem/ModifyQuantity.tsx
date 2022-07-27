import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { SyntheticEvent } from 'react'

export default function ModifyQuantity({
  quantityValue,
  handleQuantityDispatchChange,
  QUANTITYACTION,
}) {
  function handleOnChange(evt: any) {
    handleQuantityDispatchChange({ payload: evt.target.value })
  }
  return (
    <>
      <Box>
        <Button>
          <Typography variant="button" fontWeight={700}>
            -
          </Typography>
        </Button>
        <TextField
          value={quantityValue}
          onChange={handleOnChange}
          name={'quantity'}
        />
        <Button>
          <Typography variant="button" fontWeight={700}>
            +
          </Typography>
        </Button>
      </Box>
    </>
  )
}
