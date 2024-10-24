import HeaderCard from "../components/cards/HeaderCard";

const AboutPage = () => {
	return (
		<div className={`flex gap-16 items-center mb-8`}>
			<div className="w-8/12">
				<HeaderCard
					title="Get to know me"
					titleBg="bg-black"
					titleColor="text-light-navy-accent"
					heading="Meet the person behind the products"
					description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repudiandae, deleniti aspernatur laudantium cupiditate iusto nulla ratione impedit magnam optio laborum eum omnis placeat pariatur voluptates praesentium voluptatem fugit temporibus nihil porro explicabo id quaerat minima suscipit. Illum, facilis ipsa. Quisquam repudiandae, deleniti aspernatur laudantium cupiditate iusto nulla ratione impedit magnam optio laborum eum omnis placeat pariatur voluptates praesentium voluptatem fugit temporibus nihil porro explicabo id quaerat minima suscipit. Illum, facilis ipsa`}
				/>
			</div>

			<div className="w-4/12">
				<img
					src="https://sitefile.co/666e3ce3b3394452a5bf523d/1718504267681_EA3ABE00-2915-43D5-B704-7410C39723A2.jpeg"
					alt="featured-project"
					className="w-full h-[400px] object-cover object-center"
				/>
			</div>
		</div>

	);
};

export default AboutPage;
