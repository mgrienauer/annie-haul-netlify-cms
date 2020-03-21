import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
	const { title, description, phone, email, imageUrl } = useSiteMetadata();
	return (
		<div>
			<Helmet>
				<html lang="en" className="has-navbar-fixed-top" />
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="phone" content={phone} />
				<meta name="email" content={email} />

				<link rel="apple-touch-icon" sizes="180x180" href={`${imageUrl}`} />
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-32x32.png`}
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-16x16.png`}
					sizes="16x16"
				/>

				<link
					rel="mask-icon"
					href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
					color="#ff4400"
				/>

				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta
					property="og:image"
					content={`${withPrefix("/")}img/og-image.jpg`}
				/>
			</Helmet>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default TemplateWrapper;
