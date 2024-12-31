'use client'

import Link from 'next/link';

export default function Home() {

	return (
		<div>
			<div className="text-9xl">CRUD-APP</div>
			<br />
			<div className="px-3 flex space-x-4">
				<Link href="/create" className="bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-5 rounded">create</Link>
				<Link href="/read" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"> read </Link>
				<Link href="/update" className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 px-5 rounded"> update </Link>
				<Link href="/delete" className="bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-5 rounded"> delete </Link>
			</div>
		</div>
	);
}
