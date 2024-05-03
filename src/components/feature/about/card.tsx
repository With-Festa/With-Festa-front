'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CardItem from '@/components/common/CardItem';
import { cardsData, cardTitle } from '@/constants/cardDeck';

const CardDeck = () => {
    const router = useRouter();
    return (
        <CardItem item={cardsData} mainTitle={cardTitle}>
            <div className="text-blue-500">
                <button
                    onClick={() => {
                        router.push('/product');
                    }}
                >
                    Read More
                </button>
            </div>
        </CardItem>
    );
};

export default CardDeck;
