import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material'

const SearchComponent = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          padding: '20px 0',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-50vw',
            width: '150vw',
            height: '100%',
            backgroundColor: '#545776',
            zIndex: '-1',
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: 'white', textAlign: 'center', fontSize: '36px' }}
        >
          Busca ofertas en hoteles, casas y mucho más
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            mt: '6px',
            mb: '14px',
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <FormControl
              fullWidth
              sx={{
                backgroundColor: 'white',
              }}
            >
              <TextField
                id="outlined-basic"
                label="¿A dónde vamos?"
                variant="filled"
                color="black"
                size="small"
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl
              fullWidth
              sx={{
                backgroundColor: 'white',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Check in - Check out"
                variant="filled"
                color="black"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  height: '48px !important',
                  fontWeight: '800 !important',
                  fontSize: '16px !important',
                }}
              >
                Buscar
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SearchComponent
