import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className="min-h-[78dvh] flex flex-col md:flex-row items-center mb-8 md:mb-20">
			<section className="w-full md:w-1/3 mb-6 md:mb-0">
				<img
					src="https://sitefile.co/666e3ce3b3394452a5bf523d/1718504267681_EA3ABE00-2915-43D5-B704-7410C39723A2.jpeg"
					alt="godswill-udoh-pm-techie"
					className="w-full md:w-60 h-auto md:h-60 rounded-xl md:rounded-full object-cover"
				/>
			</section>

			<section className="w-full md:w-2/3 text-center">
				<div className="">
					<h1 className="text-3xl md:text-4xl mb-6">Meet Godswill</h1>
					<p className="text-lg md:text-2xl text-light-grey-accent">
						Hello there! 👋 I'm Godswill Udoh, a seasoned product manager with a
						rich background in delivering value through collaborative efforts
						with cross-functional teams.{" "}
					</p>
				</div>

				<div className="w-full flex items-center justify-center gap-4 mt-8">
					<Link
						to={
							"https://drive.google.com/file/d/1dcD-w_yrlpymikZU9qvNe29n9TuBXzJN/view?usp=sharing"
						}
						target="_blank"
						className="py-2 px-4 text-stone-accent rounded-lg bg-white border-0"
					>
						My Resume
					</Link>
					<Link
						to={"mailto:godswilludoh@gmail.com"}
						target="_blank"
						className="py-2 px-4 text-white rounded-lg bg-stone-accent border-0"
					>
						Let's Connect
					</Link>
				</div>
			</section>
		</section>
	);
};

export default Hero;
