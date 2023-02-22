import { Typography, Box, Grid } from '@mui/material'

import CardItem from '../CardItem/CardItem'

const Recomendations = () => {
  const recomendations = [
    {
      id: 1,
      name: 'Hotel 1',
      type: 'Hostel',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      starts: 4,
      points: 8,
      distance: 2,
      location: '4.5180626,-74.1122502',
      services: ['wifi', 'piscina', 'restaurant', 'spa'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
    },
    {
      id: 2,
      name: 'Hotel 2',
      type: 'Hotel',
      image:
        'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
      starts: 2,
      points: 4,
      distance: 2,
      location: '4.5180626,-74.1122502',
      services: ['wifi', 'piscina', 'parking'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet, consectetur adipiscing el',
    },
    {
      id: 3,
      name: 'Hotel 4',
      type: 'Bed',
      image:
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80',
      starts: 2,
      points: 4,
      distance: 2,
      location: '4.5180626,-74.1122502',
      services: ['wifi', 'piscina', 'parking'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet, consectetur adipiscing el',
    },
  ]

  return (
    <>
      <Box
        sx={{
          marginTop: '25px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '28px',
            mb: '16px',
          }}
        >
          Recomendaciones
        </Typography>

        <Grid container spacing={2}>
          {recomendations.map((recomendation, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <CardItem recomendation={recomendation} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Recomendations
