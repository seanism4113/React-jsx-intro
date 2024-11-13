const Tweet = (props) => {
	return (
		<div className="tweet">
			<span className="username">{props.username}</span>
			<span>{props.message}</span>
			<div className="nameDate">
				<span> {props.name} </span>
				<span className="date">{props.date}</span>
			</div>
		</div>
	);
};
