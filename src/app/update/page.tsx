import Link from "next/link";

export default function Update() {
	return (
		<div>
			<Link href='/' className="text-9xl text-yellow-500">CRUD-APP</Link>
			<br />
			<br />
			<div className="px-5">
				<h1 className="text-4xl">Update Item</h1>
			</div>
		</div>
	);
}
