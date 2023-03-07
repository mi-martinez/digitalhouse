import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Autocomplete,
} from '@mui/material'
import moment from 'moment'
import {
  DateRangePicker,
  DateRangePickerInput,
  DayPickerRangeController,
} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import 'react-with-styles/lib/withStyles'

const SearchComponent = () => {
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

  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)
  const [focusedInput, setFocusedInput] = React.useState(null)

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  const handleFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput)
  }

  const inputProps = {
    start: startDate?.format('MMM D, YYYY') || '',
    end: endDate?.format('MMM D, YYYY') || '',
  }

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
              <Autocomplete
                id="combo-box-demo"
                options={categories}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="¿Qué buscas?"
                    variant="filled"
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl
              fullWidth
              sx={{
                '& .MuiFormControl-root': {
                  zIndex: '2',
                },
                '& .DateRangePicker_1': {
                  position: 'absolute',
                  top: '15px',
                  zIndex: '1',
                },
                '& .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover':
                  {
                    background: '#54ac88',
                    border: '0px double #00a699 !important',
                    color: '#fff',
                    borderRadius: '35px !important',
                  },
                '& .CalendarDay__selected_span': {
                  background: '#90ddbd',
                  border: '0px double #33dacd !important',
                  color: '#11442f',
                  borderRadius: '35px !important',
                },
                '& .CalendarDay__default': {
                  border: '0px double #33dacd !important',
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                label="Date Range"
                value={`${inputProps.start} - ${inputProps.end}`}
                onClick={() => setFocusedInput('startDate')}
                InputProps={{ readOnly: true }}
                sx={{
                  backgroundColor: 'white',
                }}
              />
              <DateRangePicker
                startDate={startDate}
                startDateId="your_unique_start_date_id"
                endDate={endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={handleFocusChange}
                startDatePlaceholderText="Check-in"
                endDatePlaceholderText="Check-out"
                noBorder
                small
                numberOfMonths={2}
                isOutsideRange={() => false}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  height: '56px !important',
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
