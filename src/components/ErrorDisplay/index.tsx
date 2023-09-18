import Alert from '@mui/material/Alert'

interface ErrorDisplayProps {
  error: Error
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  return <Alert severity="error">{error.message}</Alert>
}

export default ErrorDisplay
