import { Typography, Box, Grid } from '@mui/material'

import CardCategory from '../CardCategory/CardCategory'
const CategoriesSwipe = () => {
  const categories = [
    {
      id: 1,
      name: 'Hoteles',
      image: 'Hoteles.jpg',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Hostels',
      image: 'Hostels.jpg',
      quantity: 50,
    },
    {
      id: 3,
      name: 'Departamentos',
      image: 'Departamentos.jpg',
      quantity: 20,
    },
    {
      id: 4,
      name: 'Bed and breakfast',
      image: 'Bed.jpg',
      quantity: 30,
    },
  ]

  return (
    <>
      <Box
        sx={{
          marginTop: '15px',
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
          Buscar por tipo de alojamiento
        </Typography>

        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardCategory category={category} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default CategoriesSwipe
