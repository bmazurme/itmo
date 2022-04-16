import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import { cards } from "../data/news";
import CardNews from "./CardNews";

export default function SwiperNews(props) {
  return (
      <Swiper 
              slidesPerView={props.step}
              spaceBetween={30}
              freeMode={true}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
      >
          {cards.map((card, index) =>
            <SwiperSlide key={index}>
              <CardNews card={card}/>
            </SwiperSlide>
          )}
      </Swiper>
  );
}
