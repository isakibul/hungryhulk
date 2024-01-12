import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import PopularDish from "../components/PopularDish/PopularDish"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import MobileApp from "../components/MobileApp/MobileApp"
import Reservation from "../components/Reservation/Reservation"
import RegularMenu from "../components/RegularMenu/RegularMenu"

const Home = () => {
    return (
        <div className="font-poppins bg-stone-100">
            <Navbar />
            <Hero />
            <PopularDish />
            <About />
            <RegularMenu />
            <Reservation />
            <MobileApp />
            <Footer />
        </div>
    )
}

export default Home