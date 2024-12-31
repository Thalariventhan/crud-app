import Link from "next/link";

export default function Delete() {
	return (
		<div>
			<Link href='/' className="text-9xl text-red-700">CRUD-APP</Link>
			<br />
			<br />
			<div className="px-5">
				<h1 className="text-4xl">Delete Item</h1>
			</div>
		</div>
	);
}
