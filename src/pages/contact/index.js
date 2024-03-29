import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

import facebook from "../../img/social/facebook.svg";
import bbb from "../../img/social/bbb.svg";
import yelp from "../../img/social/yelp.svg";

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isValidated: false };
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...this.state,
			}),
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch(error => alert(error));
	};

	render() {
		return (
			<Layout>
				<div
					className="full-width-image-container margin-top-0"
					style={{
						backgroundImage: `url('/img/blog-index.jpg')`,
					}}
				>
					<h1 className="has-text-weight-bold is-size-1">Contact Us</h1>
				</div>
				<section className="section">
					<div className="container">
						<div className="content">
							<div className="columns is-8">
								<div className="column is-6">
									<h3 className="has-text-weight-semibold has-text-green is-size-2">
										Contact Us
									</h3>
									<h4 className="has-text-green has-text-weight-bold is-size-4">
										Call Us At: 503-477-4941
									</h4>
									<h4
										className="has-text-green has-text-weight-bold is-size-4"
										style={{ overflowWrap: "break-word" }}
									>
										Email Us At:{" "}
										<a href="mailto:kateanniehaulpdx@gmail.com" className="is-size-4 has-text-weight-super-bold has-text-black">
											kateanniehaulpdx@gmail.com
										</a>
									</h4>

									<br />
									<h4 className="has-text-green is-size-4">
										Please write us a short email with your name, email, and
										phone number and we will get back to you as soon as we can.
									</h4>
									
								</div>

								<div className="column is-6 social">
									<h3 className="has-text-weight-semibold has-text-green is-size-2">
										Follow Us
									</h3>
									<div className="content">
										<div className="social">
											<div className="social-container">
												<a
													title="facebook"
													href="https://www.facebook.com/Annie-Haul-796544483749241/"
												>
													<img
														src={facebook}
														alt="Facebook"
														style={{ width: "2em", height: "2em" }}
													/>
												</a>
											</div>

											<div className="social-container">
												<a
													title="yelp"
													href="https://www.yelp.com/biz/annie-haul-portland"
												>
													<img
														src={yelp}
														alt="Yelp"
														style={{ width: "3.2em", height: "3em" }}
													/>
												</a>
											</div>

											<div className="social-container">
												<a
													title="bbb"
													href="https://www.bbb.org/us/or/portland/profile/hauling-contractors/annie-haul-llc-1296-22945979"
												>
													<img
														src={bbb}
														alt="BBB"
														style={{ width: "3em", height: "3em" }}
													/>
												</a>
											</div>
										</div>

										<div className="content">
											<div
												className="truck-container"
												style={{ marginTop: "1.5em" }}
											>
												<img
													src="img/og-image.jpg"
													alt="annie haul yellow truck that says locally owned women owned since 1998"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
