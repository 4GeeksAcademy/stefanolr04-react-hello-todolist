import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	return (
		<div className="container">
			<h1 >My ToDo-List </h1>
			<ul>
				<li>
					<input type="text" placeholder="What do you want to do?" 
					onChange = {(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if ( e.key === "Enter"){
							setTodos(todos.concat(inputValue))
							setInputValue("")
						}
					}}>
					
					</input>

				</li>

				{todos.map((item, index) => (
					<li>
					{item}{""}
					<i 
					class="fas fa-trash-alt "
					onClick={() => 
					 setTodos(
						todos.filter(
							(t,currentIndex) =>
							index != currentIndex
						)
					)}>
					
					</i>
				</li>
				))}
				
				
			</ul>
			<div>{todos.length} task</div>
			
		</div>
	);
};

export default Home;
