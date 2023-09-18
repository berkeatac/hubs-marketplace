import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface RecoveryProgressionProps {
  totalRecoveredQuantity: number
  unassignedQuantityTotal: number
  unit: string
}

const RecoveryProgression = ({
  totalRecoveredQuantity,
  unassignedQuantityTotal,
  unit
}: RecoveryProgressionProps) => {
  const assignedPercentage =
    ((totalRecoveredQuantity - unassignedQuantityTotal) /
      totalRecoveredQuantity) *
    100

  return (
    <Stack direction="row" mt={2}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }} mr={2}>
        <CircularProgress
          variant="determinate"
          value={assignedPercentage}
          size="4rem"
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            fontSize={14}
          >{`${assignedPercentage.toFixed(1)}%`}</Typography>
        </Box>
      </Box>
      <Stack direction="column" justifyContent="center">
        <Typography variant="body2" color="text.primary">
          <b>
            {unassignedQuantityTotal.toFixed(2)} {unit}
          </b>{' '}
          is waiting for assignment
        </Typography>
        <Typography variant="body2" color="text.primary">
          of{' '}
          <b>
            {totalRecoveredQuantity.toFixed(2)} {unit}
          </b>{' '}
          total recovered
        </Typography>
      </Stack>
    </Stack>
  )
}

export default RecoveryProgression
