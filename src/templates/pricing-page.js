import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import ShamrockDiv from "../components/ShamrockDiv";
import Testimonials from "../components/Testimonials";

export const PricingPageTemplate = ({
	image,
	title,
	main,
	pricing,
	reviews,
}) => {
	return (
		<div className="content">
			<div className="full-width-image-container margin-top-0 pricing-page-hero">
				<h1
					className="has-text-weight-bold is-size-1"
					style={{
						boxShadow: "0.5rem 0 0 #48c774, -0.5rem 0 0 #48c774",
						backgroundColor: "#48c774",
						color: "white",
						padding: "1.3rem",
					}}
				>
					{title}
				</h1>
			</div>

			<section class="section">
				<div className="container is-8">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<h3 className="has-text-weight-semibold has-text-green is-size-2">
								{pricing.heading ? pricing.heading : ""}
							</h3>
							<h4 className="has-text-weight-semibold has-text-green is-size-3">
								Largest Hauling Trucks in Portland
							</h4>
							<div className="section">
								<Pricing data={pricing.plans} />
							</div>

							<ShamrockDiv />
							<div className="content">
								<h3 className="has-text-weight-semibold has-text-green is-size-2">
									{main.heading1}
								</h3>
								<p className="has-text-dark-grey">{main.description1}</p>
							</div>

							<ShamrockDiv />
							<div className="content">
								<h3 className="has-text-weight-semibold has-text-green is-size-2">
									{main.heading2}
								</h3>
								<p className="has-text-dark-grey">{main.description2}</p>
							</div>

							<ShamrockDiv />
							<div className="content">
								<h3 className="has-text-weight-semibold has-text-green is-size-2">
									{reviews.heading ? reviews.heading : ""}
								</h3>
								<Testimonials testimonials={reviews.reviews} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const PricingPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<PricingPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				main={frontmatter.main}
				pricing={frontmatter.pricing}
				reviews={frontmatter.reviews}
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
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				main {
					heading1
					heading2
					description1
					description2
				}
				pricing {
					heading
					plans {
						plan
						price
					}
				}
				reviews {
					heading
					reviews {
						author
						text
					}
				}
			}
		}
	}
`;
