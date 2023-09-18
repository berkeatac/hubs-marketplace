import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

interface ChipsProps {
  type: string
  state: string
}

const Chips = ({ type, state }: ChipsProps) => {
  return (
    <Stack direction="row" spacing={1} mb={1.5}>
      <Chip
        label={type || 'Portfolio'}
        variant="outlined"
        size="small"
        sx={{ marginBottom: '8px' }}
      />
      <Chip
        label={state === 'ACTIVE' ? 'Active' : 'Demo'}
        variant="outlined"
        size="small"
        sx={{ marginBottom: '8px' }}
      />
    </Stack>
  )
}

export default Chips
