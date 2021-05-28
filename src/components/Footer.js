import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import bbb from "../img/social/bbb.svg";
import yelp from "../img/social/yelp.svg";

const footerlogo = "../img/footer-logo.png";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-background-success has-text-white-ter">
				<div className="content has-text-centered">
					<img src={footerlogo} alt="Annie Haul" className="footer-logo" />
				</div>
				<div className="content has-text-centered has-background-success has-text-white-ter">
					<div className="container has-background-success has-text-white-ter">
						<div className="columns">
							<div className="column is-4">
								<section className="menu">
									<ul className="menu-list">
										<li>
											<Link to="/" className="navbar-item">
												Home
											</Link>
										</li>
										<li>
											<Link className="navbar-item" to="/pricing">
												Pricing
											</Link>
										</li>
										<li>
											<a
												className="navbar-item"
												href="/admin/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Admin
											</a>
										</li>
									</ul>
								</section>
							</div>
							<div className="column is-4">
								<section>
									<ul className="menu-list">
										<li>
											<Link className="navbar-item" to="/blog">
												Latest Stories
											</Link>
										</li>
										<li>
											<Link className="navbar-item" to="/contact">
												Contact
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div className="column is-4 social">
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
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
