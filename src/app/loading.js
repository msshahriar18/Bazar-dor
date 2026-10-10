import React from 'react';

function Loading() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 font-sans">
            <div className="skeleton h-4 w-48 mb-6"></div>

            <div className="rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-6 w-full">
                    <div className="skeleton h-[90px] w-[90px] shrink-0 rounded-[22px]"></div>
                    <div className="space-y-3 w-full max-w-md">
                        <div className="skeleton h-8 w-3/4"></div>
                        <div className="skeleton h-4 w-1/2"></div>
                        <div className="skeleton h-4 w-2/3"></div>
                    </div>
                </div>
                <div className="skeleton h-[120px] w-[200px] rounded-[20px]"></div>
            </div>

            <div className="mt-8 rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-8 shadow-sm">
                <div className="skeleton h-6 w-32 mb-5"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="skeleton h-[100px] rounded-[18px]"></div>
                    <div className="skeleton h-[100px] rounded-[18px]"></div>
                    <div className="skeleton h-[100px] rounded-[18px]"></div>
                </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-8 shadow-sm">
                <div className="skeleton h-6 w-48 mb-6"></div>
                <div className="space-y-4">
                    <div className="skeleton h-10 w-full"></div>
                    <div className="skeleton h-12 w-full"></div>
                    <div className="skeleton h-12 w-full"></div>
                    <div className="skeleton h-12 w-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;