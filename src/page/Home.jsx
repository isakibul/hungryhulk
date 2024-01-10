import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import PopularDish from "../components/PopularDish/PopularDish"

const Home = () => {
    return (
        <div className="font-poppins bg-stone-100">
            <Navbar />
            <Hero />
            <PopularDish />
        </div>
    )
}

export default Home