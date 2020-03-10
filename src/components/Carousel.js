import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
	render() {
		const settings = {
			speed: 800,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			lazyLoad: true,
			dots: true,
		};
		return (
			<div className="carousel-slide">
				<Slider {...settings}>
					{this.props.imgs.map((img, index) => (
						<img
							src={img.image}
							className="carousel-img"
							key={`carouselimg${index}`}
						/>
					))}
				</Slider>
			</div>
		);
	}
}
