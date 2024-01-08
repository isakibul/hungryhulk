import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Dummy from "../../Dummy"

const Home = () => {
    return (
        <div className="font-jost bg-stone-100">
            <Navbar />
            <Hero />
            <Dummy />
        </div>
    )
}

export default Home