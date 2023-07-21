import React from "react";

const Button = ({ children, look, onClick }) => {
	return (
		<button className={look} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
