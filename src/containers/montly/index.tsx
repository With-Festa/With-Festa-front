'use client';

import Image from 'next/image';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { Button } from 'antd';
import S from './montly.module.scss';

// ------------------------------------------- Component
import SearchBar from '@/components/feature/montly/searchBar';
// ------------------------------------------- Component

export default function Montly() {
	const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());

	const handlePrevMonth = () => {
		setCurrentMonth(currentMonth.subtract(1, 'month'));
	};

	const handleNextMonth = () => {
		setCurrentMonth(currentMonth.add(1, 'month'));
	};

	return (
		<div className=''>
			<SearchBar />
			<div className={S.montlyWrap}>
				<Button onClick={handlePrevMonth}>이전</Button>
				<div className={`${S.montly} ${S.montly}`}>
					<strong className=''>{currentMonth.format('YYYY')}년</strong>
					<span>{currentMonth.format('M')}월</span>
				</div>
				<Button onClick={handleNextMonth}>이후</Button>
			</div>
		</div>
	);
}
