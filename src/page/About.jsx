const About = () => {
    return (
        <div className="bg-stone-100 py-20 px-6 md:px-32 lg:px-40 xl:px-72 font-poppins text-justify text-xs lg:text-sm">
            <div>
                <p className="font-righteous text-2xl lg:text-4xl font-bold text-center">Sometimes, a smaller scale <br /> of us just work.</p>
                <p className="my-5">In Japan due to its limited space, it's not unusual to find small shops like ours serve the finest ramen. What sets Tokio Ramen apart is the attention to detail in the art of ramen creation, and the fact that ramen is the centerpiece of our offerings. It is customary to taste the broth before enjoying the rest of the bowl to know that you have exquisite quality before you. And be sure to slurp away; we won't judge. Slurping is customary in Japan and is known to actually enhance the flavor that much more.

                    And about that "ramen" you've been raving about to your friends from that fusion place... yeah, you can forget about that after experiencing ours. We can post all we want about how glorious our ramen is, but you won't know until you come by and judge for yourself.</p>
            </div>

            <div>
                <p className="font-righteous text-2xl lg:text-4xl font-bold mt-10 mb-5 text-center">Our History</p>
                <div className="">
                    <img src="/restaurant.jpg" alt="" className="rounded-sm mb-5" />
                    <p>After immigrating to the United States from Japan in the 1990s, Chef Hiro owned and operated multiple restaurants over a 20-year period. Tokio Ramen was a dream project that came to fruition in which Chef Hiro wanted to offer a Japanese culinary staple known as ramen that is gaining attention with the word quickly spreading. Ramen is, put simply, Japanese style noodles bathed in broth with complementing toppings. <br /> <br /> The menu is intentionally scaled down so that focus is directed at delivering the freshest, best quality ramen. This is the place you can come to and experience an impressionable taste of Japan without a plane ticket. Come join us for a delicious bowl of ramen with a side of steaming gyoza and a refreshing cold Japanese beverage. This is the real no-frills deal with no fusion element to it, because we prefer authenticity like you do.</p>
                </div>
                <p className="mt-10">We are firm believers in acknowledging and giving credit where it's due. With that, we'd like to let our utmost gratitude be known to those who've helped us along the way:</p>
                <div className="mt-2 flex flex-col gap-1">
                    <li>City of Boynton Beach (with distinguished praise for the CRA!)</li>
                    <li>Catoe & Son Plumbing | Flameguard Fire Equipment | LifeSafety Management</li>
                    <li>Chip Brown of AMJ | Challenger Operations Inc</li>
                </div>
            </div>
        </div>
    )
}

export default About