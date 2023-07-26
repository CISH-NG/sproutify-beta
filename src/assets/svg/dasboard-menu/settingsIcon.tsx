import { SVGProps } from 'react';

const SettingsIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				x="0.5"
				y="0.5"
				width="31"
				height="31"
				rx="15.5"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.4658 9.72436C15.798 9.53979 16.202 9.5398 16.5342 9.72436L21.3342 12.391C21.6834 12.585 21.9 12.9531 21.9 13.3526V18.6465C21.9 19.046 21.6834 19.4141 21.3342 19.6081L16.5342 22.2748C16.202 22.4593 15.798 22.4593 15.4658 22.2748L10.6658 19.6081C10.3166 19.4141 10.1 19.046 10.1 18.6465V13.3526C10.1 12.9531 10.3166 12.585 10.6658 12.391L15.4658 9.72436ZM16.0486 10.5985C16.0184 10.5817 15.9816 10.5817 15.9514 10.5985L11.1514 13.2652C11.1197 13.2828 11.1 13.3163 11.1 13.3526V18.6465C11.1 18.6828 11.1197 18.7163 11.1514 18.7339L15.9514 21.4006C15.9816 21.4174 16.0184 21.4174 16.0486 21.4006L20.8486 18.7339C20.8803 18.7163 20.9 18.6828 20.9 18.6465V13.3526C20.9 13.3163 20.8803 13.2828 20.8486 13.2652L16.0486 10.5985Z"
				fill="white"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.8333 15.9996C12.8333 14.2507 14.2511 12.8329 16 12.8329C17.7489 12.8329 19.1667 14.2507 19.1667 15.9996C19.1667 17.7485 17.7489 19.1662 16 19.1662C14.2511 19.1662 12.8333 17.7485 12.8333 15.9996ZM16 13.8329C14.8034 13.8329 13.8333 14.8029 13.8333 15.9996C13.8333 17.1962 14.8034 18.1662 16 18.1662C17.1966 18.1662 18.1667 17.1962 18.1667 15.9996C18.1667 14.8029 17.1966 13.8329 16 13.8329Z"
				fill="white"
			/>
			<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#F5F5F5" />
		</svg>
	);
};

export default SettingsIcon;