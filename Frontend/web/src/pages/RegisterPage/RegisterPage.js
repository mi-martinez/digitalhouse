import { useState, useEffect } from 'react'

import { TextField, Button, Box, Link } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RegisterPage = () => {
  const [disabled, setDisabled] = useState(true)
  const [dataRegister, setDataRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  console.log(dataRegister)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDataRegister({
      ...dataRegister,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (dataRegister.password === dataRegister.passwordConfirmation) {
      // aquí se pueden enviar los datos del formulario
    } else {
      // aquí se puede mostrar un mensaje de error o hacer otra acción
      console.log('Las contraseñas no coinciden')
    }
  }

  useEffect(() => {
    if (
      dataRegister.firstName &&
      dataRegister.lastName &&
      dataRegister.email &&
      dataRegister.password &&
      dataRegister.passwordConfirmation &&
      dataRegister.password === dataRegister.passwordConfirmation
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [dataRegister])

  return (
    <>
      <MetaTags title="Register" description="Register page" />

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
              mb: '20px',
            }}
          >
            Crear cuenta
          </Typography>

          <Grid
            container
            columnSpacing={2}
            sx={{
              mb: '20px',
            }}
          >
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ gap: '20px' }}>
                <TextField
                  name="firstName"
                  label="Nombre"
                  placeholder="Nombre"
                  type="text"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ gap: '20px' }}>
                <TextField
                  name="lastName"
                  label="Apellido"
                  placeholder="Apellido"
                  type="text"
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </Grid>
          </Grid>
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
              required
            />
            <TextField
              name="password"
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
              onChange={handleInputChange}
            />
            <TextField
              name="passwordConfirmation"
              label="Confirmar contraseña"
              placeholder="Confirmar contraseña"
              type="password"
              onChange={handleInputChange}
              error={
                dataRegister.password !== dataRegister.passwordConfirmation
              }
              helperText={
                dataRegister.password !== dataRegister.passwordConfirmation
                  ? 'Las contraseñas no coinciden'
                  : ''
              }
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={disabled}
              onClick={handleSubmit}
            >
              Iniciar sesión
            </Button>
          </FormControl>
          <Box
            sx={{
              marginTop: '30px',
            }}
          >
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              ¿Ya tienes una cuenta?{' '}
              <Link
                href={routes.auth()}
                sx={{
                  textDecoration: 'none',
                  color: '#54ac88',
                  fontWeight: '700',
                }}
              >
                Iniciar sesión
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default RegisterPage
