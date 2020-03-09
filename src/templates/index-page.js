import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ShamrockDiv from "../components/ShamrockDiv";

import truckIcon from "../img/truck-icon.png";

export const IndexPageTemplate = ({
	title,
	image,
	subtitle,
	mainpitch,
	blurbs,
}) => {
	return (
		<div>
			<div
				className="full-width-image main-hero"
				style={{
					backgroundImage: `
				linear-gradient(to right, rgb(0,128,0,0.4) 33%, rgb(255,255,255,0.4) 33% 66%, rgb(255,165,0,0.4) 66% 100%),
				url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
				}}
			>
				<div className="truck-div"></div>
			</div>
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<img src={mainpitch.banner}></img>
						</div>
					</div>
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<div className="content">
								<div className="content">
									<h3 className="title has-text-green has-text-weight-semibold is-size-2">
										{mainpitch.heading1}
									</h3>
									<h4 className="title has-text-green has-text-weight-semibold is-size-3">
										{mainpitch.subheading1}
									</h4>
									<p className="has-text-dark-grey">{mainpitch.description1}</p>
								</div>

								<ShamrockDiv />
								<div className="content">
									<h3 className="title has-text-green has-text-weight-semibold is-size-2">
										{mainpitch.heading2}
									</h3>
									<h4 className="title has-text-green has-text-weight-semibold is-size-3">
										{mainpitch.subheading2}
									</h4>
									<p className="has-text-dark-grey">{mainpitch.description2}</p>
								</div>

								<ShamrockDiv />
								<div className="content">
									<h3 className="title has-text-green has-text-weight-semibold is-size-2">
										{mainpitch.heading3}
									</h3>
									<h4 className="title has-text-green has-text-weight-semibold is-size-3">
										{mainpitch.subheading3}
									</h4>
									<p className="has-text-dark-grey">{mainpitch.description3}</p>
								</div>

								<ShamrockDiv />
								{/* <Features gridItems={blurbs.blurbs} /> */}

								<div className="columns">
									<div className="column is-12 has-text-centered">
										<Link className="btn" to="/products">
											See Pricing <strong>→</strong>
										</Link>
									</div>
								</div>

								<div className="column is-12">
									<h3 className="has-text-green has-text-weight-semibold is-size-2">
										Latest stories
									</h3>
									<BlogRoll />
									<div className="column is-12 has-text-centered">
										<Link className="btn" to="/blog">
											Read more <strong>→</strong>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				subtitle
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				blurbs {
					heading
					subheading
					blurbs {
						image
						text
					}
				}
				mainpitch {
					banner
					heading1
					heading2
					heading3
					subheading1
					subheading2
					subheading3
					description1
					description2
					description3
				}
			}
		}
	}
`;
