import { NextPage } from "next";
import Link from "next/link";

interface Props {
	name: string;
	url?: string;
	tip?: string;
	icon: object;
}

const Social: NextPage<Props> = (props) => {
	const { name, url, icon, tip } = props;
	return (
		<div className="flex flex-col items-center gap-3 text-1xl font-semibold">
			<div title={ name }>{ icon }</div>

			<div className="flex flex-col items-center gap-1">
				{url ? (
					<Link target="blank" href={ url } className="text-blue-700 transition-colors hover:text-blue-500" rel="noopener noreferrer" title={ name }>{ name }</Link>
				) : (
					<p title={ name }>{ name }</p>
				)}

				{tip && (
					<span className="text-zinc-600 text-xs" title={ tip }>{ tip }</span>
				)}
			</div>
		</div>
	);
};

export default Social;