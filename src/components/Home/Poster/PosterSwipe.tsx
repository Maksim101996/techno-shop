import { FC } from 'react'
import "./PosterSwipe.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css"
import { register } from 'swiper/element/bundle';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register();

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"swiper-container": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & SwiperProps,
				HTMLElement
			>;
			"swiper-slide": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
				HTMLElement
			>;
		}
	}
}

const PosterSwipe: FC = () => {


	return <div>
		<Swiper
		>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
		</Swiper>
	</div>
}

export default PosterSwipe