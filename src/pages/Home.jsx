import Hero from "../components/Home/Hero/Hero"
import PopularDish from "../components/Home/PopularDish/PopularDish";
import About from "../components/Home/About/About"
import MobileApp from "../components/Home/MobileApp/MobileApp"
import Reservation from "../components/Home/Reservation/Reservation"
import Reviews from "../components/Home/Reviews/Reviews"

const Home = () => {
    return (
        <div className="font-rubik bg-stone">
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