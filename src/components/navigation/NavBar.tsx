import siteIcons from "@/assets/icons/siteIcons";

import { Button } from "@/components/ui/button";

const NavBar = () => {
	const isMobile = window.innerWidth < 768;
	return <>{isMobile ? <MobileNav /> : <PcNav />}</>;
};
export default NavBar;

const MobileNav = () => {
	return (
		<header className="w-full flex justify-between  items-center px-5 mt-5 absolute ">
			<div>
				<img className="w-20" src={siteIcons.logo} alt="qupid logo" />
			</div>
			<div className="flex gap-10">
				<Button variant="outline" className="rounded-xl">
					Download Qupid
				</Button>
			</div>
		</header>
	);
};
const PcNav = () => {
	return (
		<header className="w-full flex justify-between  items-center px-20 mt-5 absolute ">
			<div>
				<img src={siteIcons.logo} alt="qupid logo" />
			</div>
			<div className="flex gap-10">
				<Button className="rounded-xl">Sign Up</Button>
				<Button className="rounded-xl">Download On Android</Button>
			</div>
		</header>
	);
};
