import FavoriteIcon from '@mui/icons-material/Favorite'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import PoolIcon from '@mui/icons-material/Pool'
import RoomIcon from '@mui/icons-material/Room'
import SpaIcon from '@mui/icons-material/Spa'
import StarIcon from '@mui/icons-material/Star'
import WifiIcon from '@mui/icons-material/Wifi'
import {
  Box,
  Typography,
  Grid,
  Tooltip,
  Link,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material'

const CardItem = ({ recomendation }) => {
  console.log(recomendation.services)

  const starts = (n) => {
    let stars = []
    for (let i = 0; i < n; i++) {
      stars.push(
        <StarIcon key={i} sx={{ fontSize: '17px', color: '#54ac88' }} />
      )
    }
    return stars
  }

  /* devolver maximo 120 caracteres */
  const description = (desc) => {
    if (desc.length > 80) {
      return desc.substring(0, 80) + '...'
    } else {
      return desc
    }
  }

  const wordsPoints = (n) => {
    if (n > 8) {
      return 'Excelente'
    } else if (n > 6) {
      return 'Muy bueno'
    } else if (n > 4) {
      return 'Bueno'
    } else {
      return 'Regular'
    }
  }

  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            background: '#FFFFFF',
            border: '1px solid #F3F1ED',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            padding: '14px',
            position: 'relative',
            pb: '0px',
            height: '100%',
          }}
          alignItems="center"
        >
          <Grid item xs={12} md={6} sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                background: '#e7e7e7',
                marginTop: '-14px',
                marginLeft: '-14px',
                borderRadius: {
                  xs: '10px 10px 0 0',
                  md: '10px 0 0 10px',
                },
                backgroundImage: `url(${recomendation?.image}})`,
                height: {
                  xs: '190px',
                  sm: '190px',
                  md: '326px',
                  lg: '264px',
                },
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <FavoriteIcon
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  color: '#fff',
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: {
                xs: '14px 0px 14px 0',
                md: '14px 0px 14px 14px',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mr: '6px',
                    }}
                  >
                    {recomendation?.type}
                  </Typography>
                  {starts(recomendation?.starts)}
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#383B58',
                  }}
                >
                  {recomendation?.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'right',
                  flexDirection: 'column',
                  alignItems: 'end',
                  gap: '2px',
                }}
              >
                <Box
                  sx={{
                    background: '#383B58',
                    border: '1px solid #383B58',
                    borderRadius: '10px',
                    color: '#fff',
                    fontWeight: '700',
                    padding: '0 10px',
                    //marginRight: '-14px',
                  }}
                >
                  {recomendation?.points}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#383B58',
                    //marginRight: '-14px',
                    fontWeight: '600',
                  }}
                >
                  {wordsPoints(recomendation?.points)}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: '12px',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <RoomIcon
                  sx={{
                    fontSize: '17px',
                  }}
                />{' '}
                A {recomendation?.distance} del centro.
                <Link
                  href={`https://www.google.com/maps/@${recomendation?.location},15z?hl=es`}
                  target="_blank"
                  sx={{
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                >
                  MOSTRAR EN EL MAPA
                </Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '5px',
                marginLeft: '2px',
              }}
            >
              {recomendation?.services.map((service, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      '& svg': {
                        color: '#393b58',
                        fontSize: '20px',
                      },
                    }}
                  >
                    {service === 'wifi' && (
                      <Tooltip title="Wifi" placement="top">
                        <WifiIcon sx={{ fontSize: '17px' }} />
                      </Tooltip>
                    )}
                    {service === 'parking' && (
                      <Tooltip title="Estacionamiento" placement="top">
                        <LocalParkingIcon sx={{ fontSize: '17px' }} />
                      </Tooltip>
                    )}
                    {service === 'piscina' && (
                      <Tooltip title="Piscina" placement="top">
                        <PoolIcon sx={{ fontSize: '17px' }} />
                      </Tooltip>
                    )}
                    {service === 'spa' && (
                      <Tooltip title="Spa" placement="top">
                        <SpaIcon sx={{ fontSize: '17px' }} />
                      </Tooltip>
                    )}
                    {service === 'restaurant' && (
                      <Tooltip title="Restaurante" placement="top">
                        <LocalDiningIcon sx={{ fontSize: '17px' }} />
                      </Tooltip>
                    )}
                  </Box>
                )
              })}
            </Box>

            <Box
              sx={{
                mb: '6px',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  marginTop: '12px',
                }}
              >
                {description(recomendation?.description)}
              </Typography>

              <FormControl
                fullWidth
                sx={{
                  marginTop: '12px',
                }}
              >
                <Button variant="contained">Ver más</Button>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default CardItem
