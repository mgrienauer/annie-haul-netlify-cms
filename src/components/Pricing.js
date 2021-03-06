import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
	<div className="columns is-mobile is-multiline">
		{data.map(price => (
			<div key={price.plan} className="column">
				<h3 className="has-text-centered has-text-weight-semibold">
					{price.plan}
				</h3>
				<h3 className=" has-text-weight-bold has-text-green has-text-centered">
					${price.price}
				</h3>
			</div>
		))}
	</div>
);

Pricing.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			plan: PropTypes.string,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			description: PropTypes.string,
			items: PropTypes.array,
		}),
	),
};

export default Pricing;
