import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

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
								<a title="facebook" href="https://facebook.com">
									<img
										src={facebook}
										alt="Facebook"
										style={{ width: "2em", height: "2em" }}
									/>
								</a>
								<a title="twitter" href="https://twitter.com">
									<img
										className="fas fa-lg"
										src={twitter}
										alt="Twitter"
										style={{ width: "2em", height: "2em" }}
									/>
								</a>
								<a title="instagram" href="https://instagram.com">
									<img
										src={instagram}
										alt="Instagram"
										style={{ width: "2em", height: "2em" }}
									/>
								</a>
								<a title="vimeo" href="https://vimeo.com">
									<img
										src={vimeo}
										alt="Vimeo"
										style={{ width: "2em", height: "2em" }}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
