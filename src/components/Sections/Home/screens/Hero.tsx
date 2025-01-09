import { Button } from "@/components/ui/button";
import siteImages from "@/assets/images/siteImages";
const Hero = () => {
	return (
		<section className="h-screen w-full  pt-32 sm:pt-44 ">
			<div className="flex flex-col items-center  gap-5">
				<h1 className="sm:text-center text-4xl leading-[3rem] font-bold sm:tracking-wider">
					Discover Love, Build Friendships, and <br /> Share Unforgettable
					Moments with
					<span className="sm:block sm:rounded-xl sm:bg-red-300 p-1 px-2 w-fit sm:mx-auto">
						Qupid
					</span>
				</h1>

				<div className="flex flex-col  sm:flex-row gap-2">
					<Button className="rounded-xl w-full">Download on iPhone</Button>
					<Button className="rounded-xl w-full">Download on iPhone</Button>
				</div>
			</div>
			<div>
				<img src={siteImages.heroPc} alt="" />
			</div>
		</section>
	);
};
export default Hero;
