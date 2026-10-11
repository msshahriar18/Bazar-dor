"use client";

export default function BengaliDate() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Dhaka'
    };

    const formatter = new Intl.DateTimeFormat('bn-BD', options);
    const todayDate = formatter.format(new Date());

    return (
        <div className="text-s font-medium text-gray-500">
            {todayDate}
        </div>
    );
}
