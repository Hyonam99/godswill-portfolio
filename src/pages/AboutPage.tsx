import HeaderCard from "../components/cards/HeaderCard";

const AboutPage = () => {
	return (
		<section className={`flex flex-col-reverse md:flex-row gap-16 items-start md:items-center mb-8 h-[100dvh]`}>
			<div className="w-full md:w-8/12">
				<HeaderCard
					title="Get to know me"
					titleBg="bg-black"
					titleColor="text-light-navy-accent"
					heading="Meet the person behind the products"
					description={``}
				/>

				<p className="mb-3 text-light-grey-accent">
					Hi there! I’m Godswill Udoh—a passionate Product Manager with a knack
					for crafting impactful, user-centered solutions across diverse
					industries like FinTech, SaaS, and more. Since I embarked on my
					product management journey in 2022, I’ve had the opportunity to work
					on some exciting projects that combine strategic thinking, data-driven
					insights, and a focus on delivering exceptional user experiences.
				</p>

				<p className="mb-3 text-light-grey-accent">
					With an engineering background, I bring a technical edge to my product
					roles, enabling me to bridge the gap between development and design
					teams seamlessly. I’m someone who enjoys deep-diving into user
					behavior and analyzing data to uncover insights that inform better
					product decisions.
				</p>

				<p className="mb-3 text-light-grey-accent">
					When I’m not working on product roadmaps or collaborating with
					cross-functional teams, you’ll likely find me catching up on tech
					podcasts, discovering hidden gems on Netflix, or exploring new ideas
					and trends in product management. I’m always looking for ways to learn
					and grow, both personally and professionally, while bringing value to
					the teams I work with and the users we serve.
				</p>

				<p className="mb-3 text-light-grey-accent">
					Thanks for stopping by, and I’m excited to connect!
				</p>
			</div>

			<div className="w-full md:w-4/12">
				<img
					src="https://sitefile.co/666e3ce3b3394452a5bf523d/1718504267681_EA3ABE00-2915-43D5-B704-7410C39723A2.jpeg"
					alt="featured-project"
					className="w-full h-[400px] object-cover object-center"
				/>
			</div>
		</section>
	);
};

export default AboutPage;
