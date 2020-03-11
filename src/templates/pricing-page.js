import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import ShamrockDiv from "../components/ShamrockDiv";

export const PricingPageTemplate = ({
	image,
	title,
	main,
	pricing,
	reviews,
}) => {
	console.log(image);
	return (
		<div className="content">
			<div
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

			<section class="section">
				<div className="container">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<h3 className="has-text-weight-semibold has-text-green is-size-2">
								{pricing.heading}
							</h3>
							<h4 className="has-text-weight-semibold has-text-green is-size-3">
								Largest Hauling Trucks in Portland
							</h4>
							<Pricing data={pricing.plans} />

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
