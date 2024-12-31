import Link from "next/link";

export default function Create() {
	return (
		<div>
			<Link href='/' className="text-9xl text-green-700">CRUD-APP</Link>
			<br />
			<br />
			<div className="px-5">
				<h1 className="text-4xl">Create Item</h1>
			</div>
		</div>
	);
}
