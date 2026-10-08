'use client';

import { useState, useEffect } from 'react';

export default function BengaliDate() {
    const [todayDate, setTodayDate] = useState('');

    useEffect(() => {
        const today = new Date();

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Dhaka'
        };

        const formatter = new Intl.DateTimeFormat('bn-BD', options);
        setTodayDate(formatter.format(today));
    }, []);

    return (
        <div className="text-s font-medium text-gray-500">
            {todayDate || 'তারিখ লোড হচ্ছে...'}
        </div>
    );
}

