import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import VehicleGallery from "../components/VehicleGallery"
import "../styles/globals.css"

const Home = () => {
  return (
    <div >
      <Header/>
      <Hero/>
      <VehicleGallery/>
      <Footer/>
    </div>
  )
}

export default Home
