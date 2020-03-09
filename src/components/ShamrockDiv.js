import React from "react";
import clover from "../img/clover.svg";

export default function ShamrockDiv() {
	return (
		<div className="shamrock-row">
			<div>
				<img src={clover} alt="shamrock" height="40" width="40"></img>
			</div>
			<div>
				<img src={clover} alt="shamrock" height="40" width="40"></img>
			</div>
			<div>
				<img src={clover} alt="shamrock" height="40" width="40"></img>
			</div>
			<div>
				<img src={clover} alt="shamrock" height="40" width="40"></img>
			</div>
			<div>
				<img src={clover} alt="shamrock" height="40" width="40"></img>
			</div>
		</div>
	);
}
