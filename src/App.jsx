import { useState } from 'react'
import PreNavbar from './components/PreNavbar';
import "../src/styles/App.css"
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Slider from './components/Slider';
import data from "./data/data.json"
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import "./styles/HotAccessoriesMenu.css"
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOption from './components/NavOption';


function App() {

  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />
        <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitness={data.fitnessAndLifeStyle} home={data.home} radio={data.audio} accessories={data.accessories} />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProducts starProducts={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route path='/' element={<> <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} /></>}> </Route>
          <Route path='/smartDevice' element={<> <HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} /></>}> </Route>
          <Route path='/ho`me' element={<> <HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} /></>}> </Route>
          <Route path='/lifestyle' element={<> <HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} /></>}> </Route>
          <Route path='/mobileAccessories' element={<> <HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} /></>}> </Route>
        </Routes>
        <Heading text="PORDUCT REVIEW" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos}/>
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner.end}/>
        <Footer footer={data.footer}/>
      </Router>
    </>
  )
}

export default App
