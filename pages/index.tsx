import TableOfContents from "../components/TableOfContents";
import ProjectBox from "../components/ProjectBox";

export default function Home() {
	const projects = [
		{ title: "Better Array", color: "bg-pink-400", 
		  description: "BetterArray is a C++ library that provides a more convenient and efficient way to work with arrays.", 
		  url: "https://github.com/uesleibros/BetterArray",
		  authors: ["Me"] 
		},
		{ title: "Periodic Table JSON", color: "bg-blue-400", 
		  description: "An JSON file of the Periodic Table.", 
		  badge: "Contributor",
		  url: "https://github.com/therealarfu/Periodic-Table-JSON",
		  authors: ["Me", "TheRealArfu"] 
		},
	];
	return (
		<div className="relative flex flex-col justify-center items-center p-4">
			<h1 id="about" className="text-4xl font-semibold mb-10">About Me</h1>
			<p className="text-gray-600 max-w-prose">
        		Hello! I'm Ueslei Paim, a passionate and experienced programmer with a keen interest in crafting elegant solutions to complex problems. With a solid foundation in computer science and a strong commitment to continuous learning, I thrive on creating efficient and effective software solutions.
			</p>
			<h3 className="text-lg font-semibold mt-4 mb-4">Technical Expertise</h3>
			<p className="text-gray-600 max-w-prose">
			  My journey in programming began several years ago, and since then, I've honed my skills in various technologies and programming languages. I have extensive experience in:
			</p>
			<ul className="list-disc text-gray-600 max-w-prose">
			  <li><strong>Web Development</strong>: Building responsive and user-friendly websites using HTML, CSS, and JavaScript. Working great in frontend frameworks like React and Vue.js.</li>
			  <li><strong>Backend Development</strong>: Crafting robust and scalable APIs and server-side applications using technologies such as Node.js and Express, Python and Flask (or FastAPI).</li>
			  <li><strong>Database Management</strong>: Designing, implementing, and optimizing databases using SQL and NoSQL databases like MySQL, MongoDB and Supabase.</li>
			  <li><strong>Version Control</strong>: Git and collaborative development using platforms like GitHub and GitLab.</li>
			</ul>
			<h3 className="text-lg font-semibold mt-4 mb-4">Problem Solver</h3>
			<p className="text-gray-600 max-w-prose">
			  I approach coding as a creative challenge, always seeking innovative solutions to complex problems. My analytical mindset and attention to detail allow me to break down intricate issues and develop effective strategies to overcome them. I thrive in collaborative environments and value open communication and teamwork.
			</p>
			<h3 className="text-lg font-semibold mt-4 mb-4">Lifelong Learner</h3>
			<p className="text-gray-600 max-w-prose">
			  The world of technology is constantly evolving, and I am committed to staying up-to-date with the latest trends and advancements. I'm enthusiastic about embracing new languages, frameworks, and tools, allowing me to provide cutting-edge solutions to modern challenges.
			</p>

			<h1 id="projects" className="text-4xl font-semibold mt-10 mb-10">Projects</h1>

			<div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center">
				{projects.map((project, index) => (
					<ProjectBox
						key={index}
						title={project.title}
						color={project.color}
						description={project.description}
						badge={project.badge}
						url={project.url}
						authors={project.authors}
		      	/>
	      	))}
      	</div>
			<TableOfContents />
		</div>
	);
};
