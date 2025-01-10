const More = () => {
	const gain = [
		{
			title: "Make Real Connections",
			text: "Our focus is on helping you meet real people in meaningful ways.",
		},
		{
			title: "Tailored to Your Interests",
			text: "From shared hobbies to local events, Qupid helps you find people who fit your vibe.",
		},
		{
			title: "Safe & Inclusive Space",
			text: "With profile verification and moderation, Qupid ensures a safe community for everyone.",
		},
	];
	return (
		<section>
			<h3 className="text-center font-bold text-3xl mt-20">
				More Than an App—A Gateway to Belonging.
			</h3>
			<div className="flex flex-col lg:flex-row px-2 w-full gap-5 lg:px-44">
				{gain.map((item, index) => {
					return (
						<div
							key={index}
							className="rounded-xl shadow-lg bg-[#F5F5F5] px-5 sm:px-10 sm:py-16 lg:px-5 lg:py-10 py-2 flex flex-col gap-2"
						>
							<h5 className="font-semibold">{item.title}</h5>
							<p>{item.text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default More;
