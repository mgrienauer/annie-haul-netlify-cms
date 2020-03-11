import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
	<div className="columns is-multiline">
		<div className="column is-12">
			<h3 className="title has-text-green has-text-weight-semibold is-size-2">
				{gridItems.heading}
			</h3>
			<h4 className="title has-text-green has-text-weight-semibold is-size-3">
				{gridItems.subheading}
			</h4>
		</div>

		{gridItems.blurbs.map(item => (
			<div key={item.text} className="column is-6">
				<div className="content">
					<div className="has-text-centered">
						<div
							style={{
								width: "90%",
								display: "inline-block",
								margin: "1em",
							}}
						>
							<PreviewCompatibleImage imageInfo={item} />
						</div>
					</div>
					<p>{item.text}</p>
				</div>
			</div>
		))}
	</div>
);

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			text: PropTypes.string,
		}),
	),
};

export default FeatureGrid;
