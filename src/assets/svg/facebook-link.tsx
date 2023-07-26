import { SVGProps } from 'react';

const Facebook = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width="48" height="48" rx="24" fill={props.color ?? '#1F1717'} />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21.9836 13.0503C23.2964 11.7375 25.0768 11 26.9333 11H30.5333C31.0856 11 31.5333 11.4477 31.5333 12V16.8C31.5333 17.3523 31.0856 17.8 30.5333 17.8H26.9333C26.8803 17.8 26.8294 17.8211 26.7919 17.8586C26.7544 17.8961 26.7333 17.947 26.7333 18V20.6H30.5333C30.8413 20.6 31.132 20.7419 31.3215 20.9846C31.5111 21.2273 31.5782 21.5438 31.5035 21.8425L30.3035 26.6425C30.1922 27.0877 29.7922 27.4 29.3333 27.4H26.7333V36C26.7333 36.5523 26.2856 37 25.7333 37H20.9333C20.3811 37 19.9333 36.5523 19.9333 36V27.4H17.3333C16.7811 27.4 16.3333 26.9523 16.3333 26.4V21.6C16.3333 21.0477 16.7811 20.6 17.3333 20.6H19.9333V18C19.9333 16.1435 20.6708 14.363 21.9836 13.0503ZM26.9333 13C25.6073 13 24.3355 13.5268 23.3978 14.4645C22.4601 15.4021 21.9333 16.6739 21.9333 18V21.6C21.9333 22.1523 21.4856 22.6 20.9333 22.6H18.3333V25.4H20.9333C21.4856 25.4 21.9333 25.8477 21.9333 26.4V35H24.7333V26.4C24.7333 25.8477 25.1811 25.4 25.7333 25.4H28.5526L29.2526 22.6H25.7333C25.1811 22.6 24.7333 22.1523 24.7333 21.6V18C24.7333 17.4165 24.9651 16.8569 25.3777 16.4444C25.7903 16.0318 26.3499 15.8 26.9333 15.8H29.5333V13H26.9333Z"
				fill="white"
			/>
		</svg>
	);
};

export default Facebook;