import { Box, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: '#54ac88',
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          padding: '15px 10px',
          color: '#fff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '1480px',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}
        >
          <Typography variant="body1" sx={{ color: '#fff' }}>
            ©2023 Digital Booking
          </Typography>
          <Box>
            <FacebookIcon sx={{ color: '#fff', marginRight: '10px' }} />
            <LinkedInIcon sx={{ color: '#fff' }} />
            <TwitterIcon sx={{ color: '#fff', marginLeft: '10px' }} />
            <InstagramIcon sx={{ color: '#fff', marginLeft: '10px' }} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
