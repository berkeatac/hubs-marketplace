import Alert from '@mui/material/Alert'

const ErrorDisplay = ({ error }: { error: Error }) => {
  return <Alert severity="error">{error.message}</Alert>
}

export default ErrorDisplay
