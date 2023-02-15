import { Box, Button, IconButton, useMediaQuery } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { margin } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

/* comprobar la resolución de la pantalla para mostrar el menú de navegación */
const isMobile = useMediaQuery('(max-width: 600px)');






  return (
    <>
    {!isMobile ? ( 
      <Box sx={{
        display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
padding: '8px 24px',
background: '#fff',
boxShadow: '0px 0px 30px #19303424'
      }}>
        <Box
        sx={{
          '& img': {
            maxWidth: '150px'
          }
        }}
        >
          <img src={require('public/logo.svg')}
          alt="logo" />
        </Box>
        <Box sx={{
          display: 'flex',
gap: '15px'
        }}>
        <Button variant="outlined" sx={{
          paddingLeft: '10px'
        }}>
        <IconButton sx={{
          padding: '0 6px 0 0',
color: '#54ac88'
        }}>
        <PersonOutlineIcon />
        </IconButton>
        Iniciar sesión</Button>
          <Button variant="contained">Crear cuenta</Button>
          
          </Box>
      </Box>
    ) : (
      <Box sx={{
        display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
padding: '8px 12px',
background: '#fff',
boxShadow: '0px 0px 30px #19303424'
      }}><Box
        sx={{
          '& img': {
            maxWidth: '50px',
            mb: '-8px'
          }
        }}
        >
          <img src={require('public/isologo.svg')}
          alt="logo" />
        </Box>
          <MenuIcon sx={{
            fontSize: '30px',
color: '#52AC88'
          }}

          />
        </Box>
    )}
    </>
  )
}

export default Header
