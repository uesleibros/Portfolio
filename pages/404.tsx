import { useRouter } from "next/router";
import { useEffect  } from "react";
import Image from "next/image";
import Link from "next/link";
import sadFace from "../public/sad-face.svg";

export default function Custom404() {
	const router = useRouter();

	useEffect(() => {
		const currentRoute = router.asPath;
		document.getElementById("info").innerHTML = `Page <strong>${currentRoute}</strong> not exists.`;
	}, []);

	return (
		<div className="relative flex flex-col justify-center items-center">
			<Image priority src={sadFace} className="select-none" />
			<h1 className="text-8xl font-bold mt-5">404</h1>
			<p id="info"></p>
			<button type="button" className="bg-blue-500 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
				<Link href="/">
					Return to home.
				</Link>
			</button>
		</div>
	);
};