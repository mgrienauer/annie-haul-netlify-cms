import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";

export const PricingPageTemplate = ({
	image,
	title,
	heading,
	description,
	intro,
	main,

	fullImage,
	pricing,
}) => (
	<div className="content">
		{/* <div
			className="full-width-image-container margin-top-0"
			style={{
				backgroundImage: `url(${
					!!image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
			}}
		>
			<h2
				className="has-text-weight-bold is-size-1"
				style={{
					boxShadow: "0.5rem 0 0 #75b79e, -0.5rem 0 0 #75b79e",
					backgroundColor: "#75b79e",
					color: "white",
					padding: "1rem",
				}}
			>
				{title}
			</h2>
		</div>
		<section className="section section--gradient">
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-12">
							<h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
							<p>{description}</p>
						</div>
					</div>
					<div className="columns">
						<div className="column is-12">
							<div className="columns">
								<div className="column is-12">
									<h3 className="has-text-weight-semibold is-size-3">
										{main.heading}
									</h3>
									<p>{main.description}</p>
								</div>
							</div>
							<h2 className="has-text-weight-semibold is-size-2">
								{pricing.heading}
							</h2>
							<p className="is-size-5">{pricing.description}</p>
							<Pricing data={pricing.plans} />
						</div>
					</div>
				</div>
			</div>
		</section> */}
	</div>
);

PricingPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
	main: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
	testimonials: PropTypes.array,
	fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	pricing: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		plans: PropTypes.array,
	}),
};

const PricingPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<PricingPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				description={frontmatter.description}
				intro={frontmatter.intro}
				main={frontmatter.main}
				testimonials={frontmatter.testimonials}
				fullImage={frontmatter.full_image}
				pricing={frontmatter.pricing}
			/>
		</Layout>
	);
};

PricingPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default PricingPage;

export const pricingPageQuery = graphql`
	query PricingPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "pricing-page" } }) {
			frontmatter {
				title
				pricing {
					heading
				}
			}
		}
	}
`;
