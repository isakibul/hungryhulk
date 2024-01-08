import React from 'react'

const Dummy = () => {
    return (
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptates ducimus. Similique facilis culpa totam distinctio quia laboriosam recusandae saepe quisquam? Illo, perspiciatis. Exercitationem quaerat repellendus maxime optio nulla ipsam odit quos labore. Aspernatur dolorum deserunt incidunt aut consequatur ut natus omnis itaque quasi quas earum numquam quo quia tempora maxime, exercitationem mollitia ex. Cum aliquid ad non, officiis dolore accusamus nihil commodi deleniti inventore ipsa odio, nisi ab voluptate iusto sit cumque ratione, aliquam tenetur maiores illo facilis? Quod ipsa temporibus sit, voluptas commodi debitis ut quia hic ratione magni eveniet facilis voluptates doloremque nostrum tenetur labore vel optio possimus! Nisi totam placeat, libero enim earum, nobis facere dignissimos odit ducimus fuga quas! Cumque obcaecati error soluta itaque, non tempore excepturi ipsa ea, illum assumenda reprehenderit ullam ad, molestiae maiores ratione quisquam hic. Rerum explicabo repellat possimus. Nemo nostrum maxime, illum quidem doloribus ipsa reprehenderit eius quisquam saepe. Blanditiis, illo delectus et velit consectetur nihil recusandae necessitatibus aperiam vero ipsa accusantium voluptas explicabo incidunt eaque commodi, porro facilis! Suscipit asperiores aperiam, doloribus alias illum incidunt omnis, repudiandae consequatur possimus nam eum cum reiciendis, explicabo cumque ratione ullam aut quisquam tempore ad. Obcaecati ex possimus deserunt libero voluptate magni soluta sed rerum nihil excepturi placeat illum eius mollitia quibusdam error quae officiis assumenda, quis reiciendis rem explicabo, quaerat ipsa, impedit veritatis. Minus, ad illo. Ducimus est reiciendis explicabo praesentium temporibus saepe excepturi eaque facere itaque inventore fugit corrupti nihil et consequatur, perspiciatis, quaerat pariatur corporis. Expedita in inventore suscipit debitis, accusamus nihil. Laborum optio accusantium sequi ducimus omnis, dicta tenetur labore quaerat aut doloribus amet sed eos aliquid perspiciatis accusamus natus doloremque itaque asperiores repellat velit consequuntur enim unde! Consequuntur nulla tempore reprehenderit delectus, assumenda velit, omnis rerum expedita eveniet error, blanditiis iusto. Accusamus, error illo consectetur delectus fuga deleniti aperiam, voluptatum doloremque, labore obcaecati officia dolorem. Minima officia, libero expedita cupiditate natus maxime exercitationem ratione perspiciatis laborum voluptas illum, et sint quasi quae vitae impedit ea unde atque iure nam aperiam numquam pariatur reiciendis! Deserunt culpa error eum quod quisquam aperiam, mollitia excepturi nesciunt amet velit. Quam nam excepturi temporibus unde aliquid earum aut iusto. Aliquid porro aut nostrum molestias odit deserunt culpa atque. Nisi delectus dolor ad officiis perspiciatis quos. Distinctio, dolor, enim laboriosam pariatur veritatis voluptas repellendus ad aut ipsum ab optio architecto? Accusantium asperiores error accusamus sequi autem fugit quidem quasi repudiandae perferendis, totam veniam modi odit ullam ad numquam blanditiis possimus a quam harum. Incidunt iure laudantium quam, voluptas itaque voluptates suscipit! Amet iste quaerat aut, porro labore tempora tenetur numquam libero at unde distinctio est delectus eius obcaecati, facere illo velit maiores sunt eveniet officia quae! Animi modi fugiat ullam ex quas iure tempore aliquid quae sunt ea numquam natus molestias nam et alias dolorum corrupti hic nisi assumenda recusandae excepturi soluta, consectetur sapiente! Beatae odio repellendus iusto. Odio repellendus a, velit consectetur eveniet itaque dolore labore autem harum pariatur vero explicabo nam quod, soluta blanditiis quo nesciunt adipisci, reprehenderit numquam exercitationem non neque.</div>
    )
}

export default Dummy


// < div className = "" >
//       <AnimatePresence>
//         <div className="">
//           <motion.img
//             key={activeSlide}
//             initial={{ opacity: 0, rotate: 90 }}
//             animate={{ opacity: 1, rotate: 0 }}
//             exit={{ opacity: 0, rotate: 90 }}
//             transition={{ duration: 0.4 }}
//             src={slider[activeSlide].img}
//             alt={slider[activeSlide].title}
//           />
//         </div>
//       </AnimatePresence>
//       <img className="" src={sliderBg} alt="sliderBg"></img>
//       <AnimatePresence>
//         <motion.img
//           key={activeSlide}
//           initial={{ translateX: 300, translatey: 220, opacity: 0 }}
//           animate={{ translateX: 0, translateY: 0, opacity: 1 }}
//           exit={{ translateX: -300, translateY: -220, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="subimg"
//           src={slider[activeSlide].subImg}
//           alt={slider[activeSlide].title}
//         ></motion.img>
//       </AnimatePresence>
//       <AnimatePresence>
//         <div className="">
//           <ul>
//             {slider.map((item) => (
//               <li
//                 className={classNames({
//                   active: item.id === activeSlide,
//                 })}
//                 key={item.id}
//                 onClick={() => setActiveSlide(item.id)}
//               >
//                 <motion.img
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 2 }}
//                   src={item.img}
//                   alt={item.title}
//                 />
//                 <span>{item.title}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </AnimatePresence>
//     </ >