import { AppProps } from "next/app";
import Head from "next/head";
import Header from "/components/Header.tsx";
import "/styles/globals.css";
import { inter, poppins } from "/fonts";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={`relative flex flex-col justify-center items-center mb-10 ${inter.className}`}>
			<Head>
				<title>Ueslei Paim's Portfolio</title>
			</Head>
			<Header />
			<Component {...pageProps} />
		</main>
	);
};
