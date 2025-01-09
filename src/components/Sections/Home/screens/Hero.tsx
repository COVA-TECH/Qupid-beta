import siteImages from "@/assets/images/siteImages";
import backgrounds from "@/assets/backgrounds/backgrounds";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
	const isMobile = useIsMobile();
	return (
		<section className="min-h-screen w-full  pt-32 sm:pt-44  ">
			{!isMobile && (
				<div className="absolute w-screen  z-[-20] top-0 flex justify-between">
					<img className="" src={backgrounds.loveBg} alt="" />
					<img
						className=" transform scale-x-[-1] "
						src={backgrounds.loveBg}
						alt=""
					/>
				</div>
			)}
			<div className="flex flex-col items-center px-5  gap-5 mb-5">
				<h1 className="sm:text-center text-4xl leading-[2rem] font-bold sm:tracking-wider">
					Discover Love, Build Friendships, and <br /> Share Unforgettable
					Moments with
					<span className="sm:block sm:rounded-3xl sm:bg-red-300 p-1 px-4 w-fit sm:mx-auto">
						Qupid
					</span>
				</h1>

				<div className="flex flex-col  sm:flex-row gap-2 w-full sm:w-fit ">
					<Button className="rounded-3xl w-full">Download on iPhone</Button>
					<Button className="rounded-3xl w-full">Download on Android</Button>
				</div>
			</div>
			<div className="flex justify-center items-center">
				{isMobile ? (
					<img src={siteImages.heroMobile} alt="" />
				) : (
					<img src={siteImages.heroPc} alt="" />
				)}
			</div>
		</section>
	);
};
export default Hero;
