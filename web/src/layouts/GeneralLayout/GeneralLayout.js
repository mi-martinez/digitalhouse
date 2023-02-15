import { Container } from "@mui/material"
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header"

const GeneralLayout = ({ children }) => {
  return <>
   <Header/>
  <Container maxWidth="xl" 
  sx={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }}
  >
 
  {children}
  
  </Container>
  <Footer/>
  </>
}

export default GeneralLayout
