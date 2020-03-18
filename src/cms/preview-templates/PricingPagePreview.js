import React from "react";
import PropTypes from "prop-types";
import { PricingPageTemplate } from "../../templates/pricing-page";

const PricingPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(["data"]).toJS();
	console.log(data);

	return (
		<PricingPageTemplate
			image={data.image}
			title={data.title}
			main={data.main}
			pricing={data.pricing}
			reviews={data.reviews}
		/>
	);
};

PricingPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
};

export default PricingPagePreview;
