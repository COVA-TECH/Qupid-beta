import siteImages from "@/assets/images/siteImages";

// import { useIsMobile } from "@/hooks/use-mobile";

const HIW = [
	{
		title: "Sign Up and Create Your Profile",
		text: "Share what makes you unique and what you’re looking for",
		image: siteImages.app3,
		alt: "image of qupid interface",
	},
	{
		title: "Discover People and Events",
		text: "Browse profiles or explore events near you",
		image: siteImages.app2,
		alt: "image of qupid interface",
	},
	{
		title: "Start a Conversation With People",
		text: "Message someone new, RSVP to an event, or dive into a group conversation.",
		image: siteImages.app2,
		alt: "image of qupid interface",
	},
];
const HowItWorks = () => {
	// const isMobile = useIsMobile();
	const isTablet = window.innerWidth < 1200;
	return (
		<section className="relative mt-20">
			<h2 className="text-center  font-bold text-3xl mb-10">How Qupid Works</h2>
			<div className=" flex max-sm:flex-col relative w-full justify-center gap-1 lg:px-44">
				{HIW.map((item, index) => {
					return (
						<div key={index} className=" flex flex-col items-center w-full ">
							<h3 className="font-semibold text-xl">{item.title}</h3>
							<p>{item.text}</p>
							<img
								className="h-[20rem] sm:h-[30rem] lg:h-[50rem]"
								src={item.image}
								alt={item.alt}
							/>
						</div>
					);
				})}
				{isTablet || (
					<div className="absolute bottom-0 -z-10 h-[50%] w-[90%] right-[5%] rounded-3xl bg-black"></div>
				)}
			</div>
		</section>
	);
};
export default HowItWorks;
