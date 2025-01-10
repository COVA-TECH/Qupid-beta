import { Button } from "./ui/button";
import backgrounds from "@/assets/backgrounds/backgrounds";

const footerLinks = [
	{
		title: "Terms of Service",
		href: "/terms-of-service",
	},
	{
		title: "Privacy Policy",
		href: "/terms-of-service",
	},
	{
		title: "Cookie Policy",
		href: "/terms-of-service",
	},
	{
		title: "Safety tips",
		href: "/terms-of-service",
	},
	{
		title: "Help & Support",
		href: "/terms-of-service",
	},
];

const isTablet = window.innerWidth < 1200;
const Footer = () => {
	return (
		<footer className="w-full   bg-primary ">
			<div className="flex flex-col items-center  text-white py-20 lg:py-48 h-full relative z-2 px-2 gap-5">
				<p className="text-center">
					Ready to meet someone special or explore amazing events?
				</p>
				<p className="text-center">Download Qupid today!</p>
				<div className="flex gap-2 flex-col sm:flex-row w-full justify-center">
					<Button className="bg-white text-primary rounded-3xl">
						Download on iPhone
					</Button>
					<Button className="bg-white text-primary rounded-3xl">
						Download on Android
					</Button>
				</div>
				{!isTablet && (
					<div className="absolute w-full -z-4  top-0 flex justify-between">
						<img className=" h-[30rem]" src={backgrounds.loveBg2} alt="" />
						<img
							className=" h-[30rem] transform scale-x-[-1] "
							src={backgrounds.loveBg2}
							alt=""
						/>
					</div>
				)}
			</div>
			<div className=" flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 h-auto py-10 border-t-2 border-white bg-primary text-white px-2 lg:px-20">
				<div className="col-span-1">logo</div>
				<div className="col-span-1 lg:col-span-2">
					<ul className="flex justify-center gap-0 flex-col lg:flex-row w-full sm:text-end lg:text-center">
						{footerLinks.map((item, index) => {
							return (
								<li className="w-full" key={index}>
									{item.title}{" "}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="col-span-1 flex justify-end">
					<p>© [2024] COVA Technologies. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
