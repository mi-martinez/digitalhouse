import { Grid } from '@mui/material'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CategoriesSwipe from 'src/components/CategoriesSwipe/CategoriesSwipe'
import Header from 'src/components/Header/Header'
import Recomendations from 'src/components/Recomendations/Recomendations'
import SearchComponent from 'src/components/SearchComponent/SearchComponent'


//https://www.figma.com/file/3xCpcIJBfgqZf0CnNfZmlt/SPRINT-1---CTD?node-id=901%3A9861&t=9N6XhfxBdhv5Dyur-0
const HomePage = () => {
  return (
    <>
      <MetaTags title="🏠 Digital House" description="Entrega Grupo 6 Digital 🏠 2023" />

        <SearchComponent />
        <CategoriesSwipe />
        <Recomendations />
    </>
  )
}

export default HomePage
