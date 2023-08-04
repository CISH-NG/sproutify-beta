import { SVGProps } from 'react';

const AlertCircle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_916_3968)">
				<path
					d="M8.00016 1.33203C4.32016 1.33203 1.3335 4.3187 1.3335 7.9987C1.3335 11.6787 4.32016 14.6654 8.00016 14.6654C11.6802 14.6654 14.6668 11.6787 14.6668 7.9987C14.6668 4.3187 11.6802 1.33203 8.00016 1.33203ZM8.00016 11.332C7.6335 11.332 7.3335 11.032 7.3335 10.6654V7.9987C7.3335 7.63203 7.6335 7.33203 8.00016 7.33203C8.36683 7.33203 8.66683 7.63203 8.66683 7.9987V10.6654C8.66683 11.032 8.36683 11.332 8.00016 11.332ZM8.66683 5.9987H7.3335V4.66536H8.66683V5.9987Z"
					fill="#E11F1F"
				/>
			</g>
			<defs>
				<clipPath id="clip0_916_3968">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default AlertCircle;
