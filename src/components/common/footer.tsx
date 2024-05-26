'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { ReactNode } from 'react';
import {
	IoTodayOutline,
	IoChatbubbleEllipsesOutline,
	IoNotificationsOutline,
	IoSettingsOutline,
	IoPersonOutline,
} from 'react-icons/io5';

import { NAV_TITLES } from '@/contants/navTitle';
interface NavProps {
	href: string;
	title: string;
	icon: ReactNode;
	login?: boolean;
}

const NavItem = ({ href, title, icon, login }: NavProps) => {
	const isLogin = true;
	return (
		<>
			{login === true && isLogin && (
				<Link href={href} className={'flex flex-col items-center gap-1'}>
					{icon}
					<span className='text-[11px]'>{title}</span>
				</Link>
			)}
			{(login === undefined || (login === false && !isLogin)) && (
				<Link href={href} className={'flex flex-col items-center gap-1'}>
					{icon}
					<span className='text-[11px]'>{title}</span>
				</Link>
			)}
		</>
	);
};
export default function Footer() {
	const navItems = [
		{ href: '/', title: NAV_TITLES.MAIN, icon: <AiOutlineHome size='21' /> },
		{ href: '/montly', title: NAV_TITLES.MONTHLY, icon: <IoTodayOutline size='21' /> },
		{ href: '/chat', title: NAV_TITLES.CHAT, icon: <IoChatbubbleEllipsesOutline size='21' /> },
		{
			href: '/notification',
			title: NAV_TITLES.NOTIFICATION,
			icon: <IoNotificationsOutline size='21' />,
		},
		{
			href: '/setting',
			title: NAV_TITLES.SETTING,
			icon: <IoSettingsOutline size='21' />,
			login: true,
		},
		{
			href: '/signUp',
			title: NAV_TITLES.SIGN_UP,
			icon: <IoPersonOutline size='20' />,
			login: false,
		},
	];

	return (
		<div className='w-full flex items-center justify-between h-14 px-[10%] py-5 bg-white border-t border-gray-200'>
			{navItems.map((n, idx) => (
				<NavItem key={idx} href={n.href} title={n.title} icon={n.icon} login={n.login} />
			))}
		</div>
	);
}
