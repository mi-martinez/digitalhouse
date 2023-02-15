import { Container } from "@mui/material"

const GeneralLayout = ({ children }) => {
  return <>
  <Container maxWidth="xl" 
  sx={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }}
  >
  {children}
  </Container>
  
  </>
}

export default GeneralLayout
