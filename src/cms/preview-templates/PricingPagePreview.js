import React from "react";
import PropTypes from "prop-types";
import { PricingPageTemplate } from "../../templates/pricing-page";

const PricingPagePreview = ({ entry, getAsset }) => {
	const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
	const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

	const entryTestimonials = entry.getIn(["data", "testimonials"]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

	const entryPricingPlans = entry.getIn(["data", "pricing", "plans"]);
	const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

	return (
		<PricingPageTemplate
			image={getAsset(entry.getIn(["data", "image"]))}
			title={entry.getIn(["data", "title"])}
			description={entry.getIn(["data", "description"])}
			intro={{ blurbs }}
			main={{
				image1: {
					image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
					alt: entry.getIn(["data", "main", "image1", "alt"]),
				},
				image2: {
					image: getAsset(entry.getIn(["data", "main", "image2", "image"])),
					alt: entry.getIn(["data", "main", "image2", "alt"]),
				},
				image3: {
					image: getAsset(entry.getIn(["data", "main", "image3", "image"])),
					alt: entry.getIn(["data", "main", "image3", "alt"]),
				},
			}}
			pricing={{
				heading: entry.getIn(["data", "pricing", "heading"]),
				description: entry.getIn(["data", "pricing", "description"]),
				plans: pricingPlans,
			}}
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
