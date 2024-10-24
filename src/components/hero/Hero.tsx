import { Button } from "@chakra-ui/react";

const Hero = () => {
	return (
		<section className="min-h-[78dvh] flex items-center">
			<section className="w-1/3">
				<img
					src="https://sitefile.co/666e3ce3b3394452a5bf523d/1718504267681_EA3ABE00-2915-43D5-B704-7410C39723A2.jpeg"
					alt="godswill-udoh-pm-techie"
					className="w-60 h-60 rounded-full object-cover"
				/>
			</section>

			<section className="w-2/3 text-center">
				<div className="">
					<h1 className="text-4xl mb-6">Meet Godswill</h1>
					<p className="text-2xl text-light-grey-accent">
						Hello there! 👋 I'm Godswill Udoh, a seasoned product manager with a
						rich background in delivering value through collaborative efforts
						with cross-functional teams.{" "}
					</p>
				</div>

				<div className="w-full flex items-center justify-center gap-4 mt-8">
					<Button className="btn-light">My Resume</Button>
					<Button className="btn-dark">Let's Connect</Button>
				</div>
			</section>
		</section>
	);
};

export default Hero;
