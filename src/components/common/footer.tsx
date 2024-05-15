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

interface NavProps {
	href: string;
	title: string;
	icon: ReactNode;
	login?: boolean;
}

const NavItem = ({ href, title, icon, login }: NavProps) => {
	const isLogin = false;
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
		{ href: '/', title: '메인', icon: <AiOutlineHome size='21' /> },
		{ href: '/montly', title: '월별', icon: <IoTodayOutline size='21' /> },
		{ href: '/chat', title: '채팅', icon: <IoChatbubbleEllipsesOutline size='21' /> },
		{ href: '/notification', title: '알림', icon: <IoNotificationsOutline size='21' /> },
		{ href: '/setting', title: '세팅', icon: <IoSettingsOutline size='21' />, login: true },
		{
			href: '/signin',
			title: '로그인/가입',
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
