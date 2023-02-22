import { Box, Typography } from '@mui/material'

const CardCategory = ({ category }) => {
  return (
    <>
      <Box
        sx={{
          background: '#FFFFFF',
          border: '1px solid #F3F1ED',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '10px',
          padding: '14px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            background: '#e7e7e7',
            marginTop: '-14px',
            marginLeft: '-14px',
            width: 'calc(100% + 28px) !important',
            borderRadius: '10px 10px 0 0',
            mb: '12px',
            backgroundImage: `url(${require(`../CategoriesSwipe/images/${category?.image}`)})`,
            height: '190px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '23px',
            color: '#383B58',
          }}
        >
          {category?.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '14px',
            lineHeight: '16px',
            color: '#383B58',
            opacity: '0.6',
          }}
        >
          {category?.quantity}
        </Typography>
      </Box>
    </>
  )
}

export default CardCategory
