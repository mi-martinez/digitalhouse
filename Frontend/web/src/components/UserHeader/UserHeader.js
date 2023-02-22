import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  IconButton,
  useMediaQuery,
  Avatar,
  Typography,
} from '@mui/material'

const UserHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          pr: '25px',
        }}
      >
        <Avatar
          sx={{
            width: '38px',
            height: '38px',
            background: '#555776',
            fontSize: '16px',
            fontWeight: '700',
          }}
        >
          MM
        </Avatar>
        <Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontWeight: '400',
              fontSize: '12px',
            }}
          >
            Hola,
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            sx={{
              fontWeight: '700',
            }}
          >
            Michael Martinez
          </Typography>
          <CloseIcon
            sx={{
              position: 'absolute',
              top: '0',
              right: '-8px',
              cursor: 'pointer',
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default UserHeader
