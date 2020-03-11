import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";

export const PricingPageTemplate = ({ image, title, main, pricing }) => (
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
		<section className="section section--gradient">
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-12">
							<h3 className="has-text-weight-semibold is-size-2">
								{pricing.heading}
							</h3>
							{/* <Pricing data={pricing.plans} /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

const PricingPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<PricingPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				main={frontmatter.main}
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
				image {
					publicURL
				}
				main {
					heading1
					heading2
					description1
					description2
				}
				pricing {
					heading
					reviews {
						text
						author
						url
					}
				}
			}
		}
	}
`;
