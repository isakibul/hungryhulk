import serve from "../assets/images/about-page/serve.jpg"
import restaurant from "../assets/images/about-page/restaurant.jpg"

const About = () => {
    return (
        <div className="bg-stone font-rubik py-20 px-6 md:px-32 lg:px-40 xl:px-72 font-poppins text-justify text-sm ">
            <div>
                <p className="font-righteous text-2xl lg:text-4xl font-bold text-center">We Are Doing More Than <br /> You Expect</p>
                <p className="mt-10 font-semibold">
                    Welcome to the culinary haven that is HungryHulk - an extraordinary gastronomic escape that transcends the ordinary! Strategically located in the bustling heart of the city, HungryHulk isn't just a restaurant; it's a grandiose tapestry of flavors, an opulent symphony for the senses. The moment you step through our welcoming doors, the air becomes infused with the tantalizing aroma of culinary magic, setting the stage for an unparalleled dining spectacle. Diversity is our strength, and our menu reflects that philosophy. Whether you're a fervent food enthusiast with an adventurous palate or someone seeking the comforting embrace of familiar flavors, HungryHulk caters to all tastes. Our culinary journey spans continents, offering a global fusion of tastes that promises to satisfy even the most discerning palates.
                    <br /><br />
                    HungryHulk boasts a vibrant and inviting atmosphere, a carefully curated ambiance that seamlessly blends sophistication with a dash of whimsy. Our space is a celebration of culinary craftsmanship, where every detail is meticulously designed to ensure a memorable experience for our cherished guests.
                </p>
                <img src={serve} alt="" className="rounded-sm my-10" />
                <p className="font-semibold">At the heart of HungryHulk lies an exceptional team of culinary virtuosos, masters of their craft, who have meticulously crafted a menu that elevates the art of gastronomy to new heights. From the first bite of our mouthwatering appetizers to the last indulgent taste of our hearty main courses, every dish is a revelation, a testament to the passion and creativity that define HungryHulk's culinary identity. Whether you're a fervent food enthusiast with an adventurous palate or someone seeking the comforting embrace of familiar flavors, HungryHulk caters to all tastes. Our culinary journey spans continents, offering a global fusion of tastes that promises to satisfy even the most discerning palates.</p>
            </div>

            <div>
                <p className="font-righteous text-2xl lg:text-4xl font-bold mt-10 mb-10 text-center">Our History</p>
                <div className="">
                    <img src={restaurant} alt="" className="rounded-sm mb-10" />
                    <p className="font-semibold">
                        Diversity is our strength, and our extensive menu reflects that philosophy. Whether you're a fervent food enthusiast with an adventurous palate or someone seeking the comforting embrace of familiar flavors, HungryHulk caters to all tastes. Our culinary journey spans continents, offering a global fusion of tastes that promises to satisfy even the most discerning palates.
                        <br /> <br />
                        HungryHulk is more than just a restaurant; it's an immersive dining adventure, a destination where every bite tells a story of unparalleled culinary excellence. Join us in embracing the extraordinary, where indulgence knows no bounds and the pursuit of flavor becomes a grand spectacle. At HungryHulk, we invite you to savor the extraordinary and revel in the magnificence of culinary artistry!
                    </p>
                </div>
                <p className="mt-10 font-semibold">We are firm believers in acknowledging and giving credit where it's due. With that, we'd like to let our utmost gratitude be known to those who've helped us along the way:</p>
                <div className="mt-2 flex flex-col gap-1 font-semibold">
                    <li>CulinaryCanvas Creations & Bistro | Epicurean Avenue, Culinary City</li>
                    <li>Catoe & Son Plumbing | Flameguard Fire Equipment | LifeSafety Management</li>
                    <li>Chip Brown of AMJ | Challenger Operations Inc</li>
                    <li>SavorySculpture Gastronomique | Gourmet Grove Street, Tastyville</li>
                </div>
            </div>
        </div>
    )
}

export default About