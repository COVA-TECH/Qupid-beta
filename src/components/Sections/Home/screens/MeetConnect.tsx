import siteIcons from "@/assets/icons/siteIcons";

const cardComps = [
	{
		icon: siteIcons.hearthCircle,
		cardTitle: "Match with Like-Minded People",
		cardText: `Discover profiles of individuals who share your interests, values, and goals—whether you're looking for love or a new best friend`,
	},
	{
		icon: siteIcons.hearthCircle,
		cardTitle: "Join Events That Inspire You",
		cardText: `Explore local gatherings, from hobby-based meetups to exciting social events, tailored to your interests and lifestyle`,
	},
	{
		icon: siteIcons.hearthCircle,
		cardTitle: "Chat and Build Connections",
		cardText: `Easily start conversations with people you connect with, turning simple chats into meaningful relationships that grow over time`,
	},
];

const MeetConnect = () => {
	return (
		<section className="px-5 lg:px-20 h-screen">
			<h2 className="font-bold text-center text-2xl sm:text-4xl mb-10">
				Meet, Connect, and Belong
			</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
				{cardComps.map((card, index) => {
					return (
						<div
							key={index}
							className="flex flex-col gap-2 bg-gray-100 shadow-lg rounded-xl p-2 px-5 py-10"
						>
							<img className="w-12" src={card.icon} alt="" />
							<h3 className="font-bold">{card.cardTitle}</h3>
							<p className="font-light">{card.cardText}</p>
						</div>
					);
				})}
			</div>

			<Discover />
		</section>
	);
};
export default MeetConnect;

const Discover = () => {
	return <>Lorem ipsum dolor sit.</>;
};
