'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const onHeaderName = () => {
	const pathname = usePathname();

	switch (pathname) {
		case '/':
			return 'Fiesta';

		default:
			return;
	}
};

export default function Header() {
	return (
		<div className='h-14 flex items-center justify-center shadow-[0_1px_10px_0_rgba(0,0,0,0.05)] '>
			<h2 className='text-xl font-bold text-black'>{onHeaderName()}</h2>
		</div>
	);
}
