import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";
import { inter, poppins } from "../fonts";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={`relative flex flex-col justify-center items-center mb-10 ${inter.className}`}>
			<Head>
				{/* Open Graph */}
				<meta property="og:title" content="Ueslei Paim's Portfolio" />
				<meta property="description" content="Welcome to my portfolio! I am a passionate and dedicated programmer with a strong background in web development. With expertise in front-end and back-end technologies, I have successfully delivered various projects that showcase my skills in creating responsive, user-friendly, and visually appealing websites and applications." />
				<meta property="og:description" content="Welcome to my portfolio! I am a passionate and dedicated programmer with a strong background in web development. With expertise in front-end and back-end technologies, I have successfully delivered various projects that showcase my skills in creating responsive, user-friendly, and visually appealing websites and applications." />
				<meta property="og:image" content="/logo.jpg" />
				
				{/* Twitter */}
				<meta property="twitter:title" content="Ueslei Paim's Portfolio" />
				<meta property="twitter:description" content="Welcome to my portfolio! I am a passionate and dedicated programmer with a strong background in web development. With expertise in front-end and back-end technologies, I have successfully delivered various projects that showcase my skills in creating responsive, user-friendly, and visually appealing websites and applications." />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:image" content="/logo.jpg" />

				<link rel="icon" href="/logo.jpg" />
				<title>Ueslei Paim's Portfolio</title>
			</Head>
			<Header />
			<Component {...pageProps} />
		</main>
	);
};
