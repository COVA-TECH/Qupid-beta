import { Button } from "@/components/ui/button";

const NavBar = () => {
	const isMobile = window.innerWidth < 768;
	return <>{isMobile ? <MobileNav /> : <PcNav />}</>;
};
export default NavBar;

const MobileNav = () => {
	return (
		<header className="w-full flex justify-between bg-red-900 items-center px-5 mt-5 absolute ">
			<div>logo</div>
			<div className="flex gap-10">
				<Button className="rounded-xl">Download Qupid</Button>
			</div>
		</header>
	);
};
const PcNav = () => {
	return (
		<header className="w-full flex justify-between bg-red-900 items-center px-20 mt-5 absolute ">
			<div>logo</div>
			<div className="flex gap-10">
				<Button className="rounded-xl">Sign Up</Button>
				<Button className="rounded-xl">Download On Android</Button>
			</div>
		</header>
	);
};
