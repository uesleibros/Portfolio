import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, AtSign, Instagram, Linkedin } from "lucide-react";

import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import ProjectBox from "@/components/ProjectBox";
import Social from "@/components/Social";
import Translations from "@/data/translations";
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
	const { language } = useLanguageSwitcher();

	const projects = [
		{ name: "Better Array", color: "bg-pink-400", 
		  description: "BetterArray is a C++ library that provides a more convenient and efficient way to work with arrays.", 
		  url: "https://github.com/uesleibros/BetterArray"
		},
		{ name: "Periodic Table JSON", color: "bg-blue-400", 
		  description: "A JSON file of the Periodic Table.", 
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
		<div className={`relative flex flex-col justify-center items-center scroll-smooth p-4 gap-4 ${language ? "visible" : "hidden"}`}>

			{/* About Me */}

			<h1 id="about" className="text-4xl font-bold mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center scroll-smooth">
				{language && Translations[language].about.title}
				<hr className="w-full relative border border-gray-200" />
			</h1>

			<p className="text-gray-600 max-w-prose">
        		{language && Translations[language].about.body}
			</p>

			<h3 id="technical-expertise" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left scroll-smooth">
				{language && Translations[language].about.s1.title}
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<p className="text-gray-600 max-w-prose">
			  {language && Translations[language].about.s1.body.text}
			</p>

			<ul className="list-disc text-gray-600 max-w-prose">
				{language &&
					Translations[language].about.s1.body.list.map((item: { title: string; body: string }, index: number) => (
					<li key={index}>
						<strong>{item.title}:</strong> {item.body}
					</li>
				))}
			</ul>

			<h3 id="problem-solver" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left scroll-smooth">
				{language && Translations[language].about.s2.title}
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<p className="text-gray-600 max-w-prose">
			  {language && Translations[language].about.s2.body.text}
			</p>

			<h3 id="lifelong-learner" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left scroll-smooth">
				{language && Translations[language].about.s3.title}
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<p className="text-gray-600 max-w-prose">
			  {language && Translations[language].about.s3.body.text}
			</p>

			{/* Technologies */}

			<h1 id="technologies" className="text-4xl font-bold mt-10 mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center scroll-smooth">
				{language && Translations[language].technologies.title}
				<hr className="w-full relative border border-gray-200" />
			</h1>

			<p className="text-gray-600 max-w-prose">
				{language && Translations[language].technologies.body}
			</p>

			<h3 id="programming-languages" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left scroll-smooth">
				{language && Translations[language].technologies.s1.title}
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<div className="relative grid grid-cols-3 sm:grid-cols-2 sm:w-full gap-12 justify-center items-center">
				<Social
					name="JavaScript"
					url="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
					tip={language && Translations[language].technologies.s1.alt}
					icon=<Image src={ JSLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="TypeScript"
					url="https://www.typescriptlang.org/"
					tip={language && Translations[language].technologies.s1.alt}
					icon=<Image src={ TSLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="Python"
					url="https://www.python.org/"
					tip={`${language && Translations[language].technologies.s1.alt} (${language && Translations[language].default})`}
					icon=<Image src={ PythonLogo } alt="" height={35} quality={100} />
				/>
			</div>

			<h3 id="frameworks" className="text-xl font-semibold mt-4 mb-4 w-[100vh] sm:w-full flex flex-col gap-6 text-left scroll-smooth">
				Frameworks & {language && Translations[language].library}s
				<hr className="w-full relative border border-gray-200" />
			</h3>

			<div className="relative grid grid-cols-3 sm:grid-cols-2 sm:w-full gap-12 justify-center items-center">
				<Social
					name="React.js"
					url="https://react.dev/"
					tip={language && Translations[language].library}
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
					tip={language && Translations[language].app}
					icon=<Image src={ FlaskLogo } alt="" height={35} quality={100} />
				/>
				<Social
					name="FastAPI"
					url="https://fastapi.tiangolo.com/"
					tip={language && Translations[language].app}
					icon=<Image src={ FastAPILogo } alt="" height={35} quality={100} />
				/>
			</div>


			{/* Projects */}

			<h1 id="projects" className="text-4xl font-bold mt-10 mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center scroll-smooth">
				{language && Translations[language].projects.title}
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

      	<h1 id="contact" className="text-4xl font-bold mt-10 mb-10 w-[100vh] sm:w-full flex flex-col gap-6 text-center scroll-smooth">
				{language && Translations[language].contacts.title}
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
