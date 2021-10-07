import React from "react";

import { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [input, setInput] = useState([]);
	const [data, setData] = useState(" ");

	useEffect(() => {}, [input]);

	return (
		<div id="wrapper" className="text-center bg-white container my-3 mt-5">
			<h1>ToDo List</h1>
			<div>
				<input
					type="text"
					placeholder="what needs to be done?"
					onChange={e => {
						setData(e.target.value);
					}}
					onKeyDown={e => {
						if (e.key === "Enter" && data != " ") {
							setInput([...input, data]);
							setData(" ");
						}
					}}
					value={data}
				/>

				<div>
					{input.map((index, key) => {
						return (
							<>
								<ul className="list-group">
									<li className="list-group-item" key={key}>
										{index}
										<a
											onClick={() => {
												input.splice(key, 1);
												setInput([...input]);
											}}>
											<i className="fas fa-trash"></i>
										</a>
									</li>
								</ul>
							</>
						);
					})}
				</div>
				<p className="text-center">{input.length} Items Left</p>
			</div>
		</div>
	);
};

export default Home;
