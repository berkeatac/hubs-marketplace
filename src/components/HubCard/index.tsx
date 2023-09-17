import { memo } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Hub } from 'types'

const HubCard = ({ hubData }: { hubData: Hub }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }} component="article">
      <CardMedia
        component="img"
        height="160"
        image={hubData.cardImage.thumbnailDirectLink}
        alt={`Card image of ${hubData.displayName}`}
        loading="lazy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hubData.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hubData.cardDescription}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <CardActions>
        <Button
          size="small"
          href={`https://test.cleanhub.com/hub/${hubData.slug}`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default memo(HubCard)
