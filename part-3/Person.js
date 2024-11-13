const Person = ({ name, age, hobbies }) => {
	const isVoting = age >= 18 ? "Please go vote" : "You must be 18";
	const hobbiesLis = hobbies.map((hobby) => <li>{hobby}</li>);

	return (
		<div>
			<p>
				<b>Learn some information about this person</b>
			</p>
			<ul>
				<li>
					<b>Name:</b> {name.length > 8 ? name.slice(0, 6) : name}
				</li>
				<li>
					<b>Age:</b> {age}
				</li>
				<div>
					<b>Is voting?</b> {isVoting}
				</div>
				<li>
					<b>Hobbies:</b>
					<ul>{hobbiesLis}</ul>
				</li>
			</ul>
		</div>
	);
};
