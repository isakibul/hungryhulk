import Marquee from "react-fast-marquee";
import useReview from "../../../hooks/useReview";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Reviews = () => {
    const reviews = useReview();
    return (
        <div className="font-rubik">
            <div className="text-center mx-6 flex flex-col items-center">
                <p className="text-3xl lg:text-5xl font-righteous font-bold mb-3">What Client Says</p>
                <p className="mb-10 text-xs md:text-sm xl:text-base md:w-2/4">Explore the diverse culinary delights at HungryHulk through the lens of satisfied patrons. From mouthwatering burgers and sushi to tantalizing vegetarian options, each review captures the essence of a memorable dining experience.</p>
            </div>
            <div>
                {reviews.length !== 0 ? (<Marquee
                    pauseOnHover={true}
                >
                    <div className="flex gap-6 mr-6 cursor-pointer">
                        {reviews.map((review, idx) => (
                            <div
                                key={idx}
                                className="text-center w-[250px] md:w-[300px] h-[375px] lg:h-[420px] bg-white rounded-sm"
                            >
                                <img
                                    src={review.clientImageUrl}
                                    alt="client"
                                />
                                <div className="p-5">
                                    <p className="text-xl font-righteous font-bold">{review.name}</p>
                                    <p className="text-xs lg:text-sm mt-2">{review.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>) : (
                    <Skeleton width="100%" count={10} height={"20px"} />
                )}
            </div>
        </div>
    )
}

export default Reviews