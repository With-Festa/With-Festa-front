'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_TITLES } from '@/contants/navTitle';

const onHeaderName = () => {
	const pathname = usePathname();

	switch (pathname) {
		case '/':
			return 'Fiesta';
		case '/montly':
			return NAV_TITLES.MONTHLY;
		case '/chat':
			return NAV_TITLES.CHAT;
		case '/notification':
			return NAV_TITLES.NOTIFICATION;
		case '/setting':
			return NAV_TITLES.SETTING;
		case '/signUp':
			return NAV_TITLES.SIGN_UP;
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
