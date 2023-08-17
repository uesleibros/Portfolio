import ProjectBox from "@/components/ProjectBox";
import Social from "@/components/Social";
import Image from "next/image";
import { useState } from "react";
import { Github, AtSign, Instagram, Linkedin } from "lucide-react";
import JSLogo from "@/public/languages/js.png";
import TSLogo from "@/public/languages/ts.png";
import PythonLogo from "@/public/languages/python.png";
import ReactLogo from "@/public/frameworks/react.png";
import NextLogo from "@/public/frameworks/next.png";
import VueLogo from "@/public/frameworks/vue.png";
import NuxtLogo from "@/public/frameworks/nuxt.png";
import FlaskLogo from "@/public/frameworks/flask.png";
import FastAPILogo from "@/public/frameworks/fastapi.png";

export default function Home() {
	const projects = [
		{ name: "Better Array", color: "bg-pink-400", 
		  description: "BetterArray is a C++ library that provides a more convenient and efficient way to work with arrays.", 
		  url: "https://github.com/uesleibros/BetterArray"
		},
		{ name: "Periodic Table JSON", color: "bg-blue-400", 
		  description: "An JSON file of the Periodic Table.", 
		  badge: "Contributor",
		  url: "https://github.com/therealarfu/Periodic-Table-JSON"
		},
		{
			name: "Crate API", color: "bg-purple-300",
			description: "An API of Crate Website from PPTGames.",
			url: "https://github.com/uesleibros/CrateAPI"
		}
	];

	return (
		<div className="relative flex flex-col justify-center items-center p-4 gap-4 ">
		
			{/* About Me */}

			<h1 id="about" className="text-4xl font-bold mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center">
				About Me
				<hr className="w-full relative border border-gray-200" />
			</h1>

			<p className="text-gray-600 max-w-prose">
        		Hello! I'm Ueslei Paim, a passionate and experienced programmer with a keen interest in crafting elegant solutions to complex problems. With a solid fundamentals in computer science and a strong commitment to continuous learning, I thrive on creating efficient and effective software solutions.
			</p>

			<h3 id="technical-expertise" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left">
				Technical Expertise
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<p className="text-gray-600 max-w-prose">
			  My journey in programming began several years ago, and since then, I've honed my skills in various technologies and programming languages. I have extensive experience in:
			</p>

			<ul className="list-disc text-gray-600 max-w-prose">
			  <li><strong>Web Development</strong>: Building responsive and user-friendly websites using HTML, CSS, and JavaScript. Working great in frontend frameworks like React and Vue.js.</li>
			  <li><strong>Backend Development</strong>: Crafting robust and scalable APIs and server-side applications using technologies such as Node.js and Express, Python and Flask (or FastAPI).</li>
			  <li><strong>Database Management</strong>: Designing, implementing, and optimizing databases using SQL and NoSQL databases like MySQL, MongoDB and Supabase.</li>
			  <li><strong>Version Control</strong>: Git and collaborative development using platforms like GitHub and GitLab.</li>
			</ul>

			<h3 id="problem-solver" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left">
				Problem Solver
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<p className="text-gray-600 max-w-prose">
			  I approach coding as a creative challenge, always seeking innovative solutions to complex problems. My analytical mindset and attention to detail allow me to break down intricate issues and develop effective strategies to overcome them. I thrive in collaborative environments and value open communication and teamwork.
			</p>

			<h3 id="lifelong-learner" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left">
				Lifelong Learner
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<p className="text-gray-600 max-w-prose">
			  The world of technology is constantly evolving, and I am committed to staying up-to-date with the latest trends and advancements. I'm enthusiastic about embracing new languages, frameworks, and tools, allowing me to provide cutting-edge solutions to modern challenges.
			</p>

			{/* Tecnologies */}

			<h1 id="tecnologies" className="text-4xl font-bold mt-10 mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center">
				Tecnologies
				<hr className="w-full relative border border-gray-200" />
			</h1>

			<p className="text-gray-600 max-w-prose">
				Welcome to the "Technologies" section of my portfolio, where I delve into the arsenal of languages, frameworks, and integrated development environments (IDEs) that form the cornerstone of my professional journey. Through this collection of tools, I've been able to craft solutions that merge creativity and functionality seamlessly.
			</p>

			<h3 id="programming-languages" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left">
				Programming Languages
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<div className="relative grid grid-cols-3 sm:grid-cols-2 sm:w-full gap-12 justify-center items-center">
				<Social
					name="JavaScript"
					url="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
					tip="Programming Language"
					icon=<Image src={ JSLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="TypeScript"
					url="https://www.typescriptlang.org/"
					tip="Programming Language"
					icon=<Image src={ TSLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="Python"
					url="https://www.python.org/"
					tip="Programming Language"
					icon=<Image src={ PythonLogo } alt="" height={35} quality={100} />
				/>
			</div>

			<h3 id="frameworks" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left">
				Frameworks
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<div className="relative grid grid-cols-3 sm:grid-cols-2 sm:w-full gap-12 justify-center items-center">
				<Social
					name="React.js"
					url="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
					tip="Framework"
					icon=<Image src={ ReactLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="Next.js"
					url="https://nextjs.org/"
					tip="Framework"
					icon=<Image src={ NextLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="Vue.js"
					url="https://vuejs.org/"
					tip="Framework"
					icon=<Image src={ VueLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="Nuxt.js"
					url="https://nuxt.com"
					tip="Framework"
					icon=<Image src={ NuxtLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="Flask"
					url="https://flask.palletsprojects.com/"
					tip="Application"
					icon=<Image src={ FlaskLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="FastAPI"
					url="https://flask.palletsprojects.com/"
					tip="Application"
					icon=<Image src={ FastAPILogo } alt="" height={35} quality={100} />
				/>
			</div>


			{/* Projects */}

			<h1 id="projects" className="text-4xl font-bold mt-10 mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center">
				Projects
				<hr className="w-full relative border border-gray-200" />
			</h1>

			<div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-12 justify-center items-center">
				{projects.map((project, index) => (
					<ProjectBox
						key={index}
						name={ project.name }
						color={project.color}
						description={project.description}
						badge={project.badge}
						url={project.url}
		      	/>
	      	))}
      	</div>

      	{/* Contact */}

      	<h1 id="contact" className="text-4xl font-bold mt-10 mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center">
				Contact
				<hr className="w-full relative border border-gray-200" />
			</h1>

      	<div className="relative grid grid-cols-3 sm:grid-cols-2 sm:w-full gap-12 justify-center items-center">
      		<Social
      			name="Github"
      			url="https://github.com/uesleibros"
      			tip="github.com/uesleibros"
      			icon=<Github size={30} />
      		/>
      		<Social
      			name="Instagram"
      			url="https://www.instagram.com/uesleou"
      			tip="@uesleou"
      			icon=<Instagram size={30} />
      		/>
      		<Social
      			name="LinkedIn"
      			url="https://www.linkedin.com/in/ueslei-paim-190b09287"
      			tip="Ueslei Paim"
      			icon=<Linkedin size={30} />
      		/>
      		<Social
      			name="Email"
      			url="https://uesleibros@gmail.com"
      			tip="uesleibros@gmail.com"
      			icon=<AtSign size={30} />
      		/>
      	</div>
		</div>
	);
};
