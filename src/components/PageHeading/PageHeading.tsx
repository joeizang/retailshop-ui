import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type PageHeadingProps = {
  headingText: string
}
export function PageHeading(props: PageHeadingProps) {
  return (
    <Box pb={2} textAlign={'center'}>
      <Typography mt={12} variant={'h4'}>
        {props.headingText}
      </Typography>
    </Box>
  )
}
