import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Experience from "./components/experience/Experience";
import FeaturedProject from "./components/FeaturedProject";
import Hero from "./components/hero/Hero";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";
import Volunteering from "./components/Volunteering";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Experience />
			<Skills />
			<FeaturedProject />
			<Projects />
			<Volunteering />
			<Articles />
			<Contact />
		</div>
	);
};

export default HomePage;
