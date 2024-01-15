import Hero from "../components/Hero/Hero"
import PopularDish from "../components/PopularDish/PopularDish"
import About from "../components/About/About"
import MobileApp from "../components/MobileApp/MobileApp"
import Reservation from "../components/Reservation/Reservation"
import Reviews from "../components/Reviews/Reviews"

const Home = () => {
    return (
        <div className="font-poppins bg-stone-100">
            <Hero />
            <PopularDish />
            <About />
            <Reviews />
            <Reservation />
            <MobileApp />
        </div>
    )
}

export default Home