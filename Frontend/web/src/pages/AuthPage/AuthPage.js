import { useEffect, useState } from 'react'

import { TextField, Button, Box, Link } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AuthPage = () => {
  const [disabled, setDisabled] = useState(true)
  const [dataRegister, setDataRegister] = useState({
    email: '',
    password: '',
  })
  console.log(dataRegister)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDataRegister({
      ...dataRegister,
      [name]: value,
    })
  }

  useEffect(() => {
    if (dataRegister.email && dataRegister.password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [dataRegister])

  return (
    <>
      <MetaTags
        title="🏠 Digital House"
        description="Entrega Grupo 6 Digital 🏠 2023"
      />

      <Grid
        container
        spacing={0}
        sx={{
          alignItems: 'center',
          height: 'calc(100vh - 130px) !important',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h2"
            color="primary"
            sx={{
              fontWeight: '700',
              fontSize: '26px',
              lineHeight: '28px',
              textAlign: 'center',
              mb: '30px',
            }}
          >
            Iniciar sesión
          </Typography>
          <FormControl
            fullWidth
            sx={{
              gap: '20px',
            }}
          >
            <TextField
              name="email"
              label="Correo electrónico"
              placeholder="Correo electrónico"
              type="email"
              onChange={handleInputChange}
            />
            <TextField
              name="password"
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
              onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" disabled={disabled}>
              Iniciar sesión
            </Button>
          </FormControl>
          <Box
            sx={{
              marginTop: '30px',
            }}
          >
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              ¿Aún no tenes cuenta?{' '}
              <Link
                href={routes.register()}
                sx={{
                  textDecoration: 'none',
                  color: '#54ac88',
                  fontWeight: '700',
                }}
              >
                Regístrate
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default AuthPage
