import NextPage from "next";
import { useRouter } from "next/router";
import { useEffect, useState  } from "react";
import Image from "next/image";
import Link from "next/link";
import sadFace from "../public/sad-face.svg";

export default function Custom404(): NextPage {
	const router = useRouter();
	const [currentRoute, setCurrentRoute] = useState("");

	useEffect(() => {
		setCurrentRoute(router.asPath);
	}, []);

	return (
		<div className="relative flex flex-col justify-center items-center">
			<Image priority src={sadFace} alt="Error 404" className="select-none" />
			<h1 className="text-8xl font-bold mt-5">404</h1>
			<p id="info">
				Page <strong>{currentRoute}</strong> not exists.
			</p>
			<button type="button" className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
				<Link href="/">
					Return to home.
				</Link>
			</button>
		</div>
	);
};