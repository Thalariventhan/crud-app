import Link from "next/link";

export default function Read() {
	return (
		<div>
			<Link href='/' className="text-9xl text-blue-700">CRUD-APP</Link>
			<br />
			<br />
			<div className="px-5">
				<h1 className="text-4xl">Read Item</h1>
			</div>
		</div>
	);
}

