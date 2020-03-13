import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<div
					className="full-width-image-container margin-top-0"
					style={{
						backgroundImage: `url('/img/blog-index-2.jpg')`,
					}}
				>
					<h1
						className="has-text-weight-bold is-size-1"
						style={{
							boxShadow: "0.5rem 0 0 #48c774, -0.5rem 0 0 #48c774",
							backgroundColor: "#48c774",
							color: "white",
							padding: "1.3rem",
						}}
					>
						Latest Stories
					</h1>
				</div>
				<section className="section">
					<div className="container">
						<div className="content">
							<BlogRoll />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
