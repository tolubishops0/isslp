// "use client";

// import React from "react";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// // @ts-ignore";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import Image from "next/image";
// import { subjects } from "../../lib/utils";

// export default function Carousel() {
//   return (
//     <Splide
//       options={{
//         type: "loop",
//         drag: "free",
//         arrows: false,
//         autoStart: true,
//         pagination: false,
//         perPage: 7,
//         autoScroll: {
//           pauseOnHover: false,
//           pauseOnFocus: false,
//           rewind: false,
//           speed: 2,
//         },
//       }}
//       extensions={{ AutoScroll }}>
//       {subjects.map((item, index) => (
//         <SplideSlide key={index} className="carousel">
//           <Image src={item.icon} alt="icons" />
//           <span className="font-bold capitalize text-[1.125rem] text-veryLightCyan leading-[1.75]">
//             {item.label}
//           </span>
//         </SplideSlide>
//       ))}
//     </Splide>
//   );
// }
