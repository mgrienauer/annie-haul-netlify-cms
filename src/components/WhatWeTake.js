import React from "react";

export default function WhatWeTake({ col1, col2, col3, col4 }) {
	const ItemsCol = colItems => (
		<div className="column is-6">
			<ul>
				{colItems.map(item => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);

	return (
		<div className="content">
			<div className="columns">
				<div className="column is-6">
					<div className="columns is-mobile">
						<ItemsCol colItems={col1} />
						<ItemsCol colItems={col2} />
					</div>
				</div>

				<div className="column is-6">
					<div className="columns is-mobile">
						<ItemsCol colItems={col3} />
						<ItemsCol colItems={col4} />
					</div>
				</div>
			</div>
		</div>
	);
}
