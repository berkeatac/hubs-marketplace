import { memo } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import Chips from './Chips'

import { Hub } from 'types'
import RecoveryProgression from './RecoveryProgression'
import Grid from '@mui/material/Grid'

interface HubCardProps {
  hubData: Hub
}

const HubCard = ({ hubData }: HubCardProps) => {
  return (
    <Grid item xs={12} sm={6} lg={4} display="flex">
      <Card
        sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
        component="article"
      >
        <CardMedia
          component="img"
          height="160"
          image={hubData.cardImage.thumbnailDirectLink}
          alt={`Card image of ${hubData.displayName}`}
          loading="lazy"
        />
        <CardContent>
          <Typography variant="h5" component="div" mb={1} mr={2}>
            {hubData.displayName}
          </Typography>

          <Chips type={hubData.type} state={hubData.state} />

          <Typography variant="body2" color="text.secondary">
            {hubData.cardDescription}
          </Typography>

          {hubData.parentHubName && (
            <Typography
              variant="subtitle2"
              component="div"
              color="text.secondary"
              mt={1}
            >
              * This company is part of parent hub{' '}
              <b>{hubData.parentHubName}</b>
            </Typography>
          )}
          <RecoveryProgression
            totalRecoveredQuantity={hubData.totalRecoveredQuantity}
            unassignedQuantityTotal={hubData.unassignedQuantityTotal}
            unit={hubData.recoveredQuantityUnit}
          />
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        {hubData.slug && (
          <CardActions>
            <Button
              size="small"
              href={`https://test.cleanhub.com/hub/${hubData.slug}`}
            >
              Learn More
            </Button>
          </CardActions>
        )}
        {hubData.logo?.directLink && (
          <Box
            component="img"
            alt={`Logo image of ${hubData.displayName}`}
            src={hubData.logo?.thumbnailDirectLink}
            height={48}
            position={'absolute'}
            top={0}
            left={0}
            bgcolor={'white'}
            borderRadius={'0 0 8px 0'}
          />
        )}
      </Card>
    </Grid>
  )
}

export default memo(HubCard)
