"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { signOut, updateUser } from "@/lib/auth-client";

const ProfileCard = ({ user }) => {
    const router = useRouter();
    const [name, setName] = useState(user.name || "");
    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        await signOut();
        toast.success("সাইন আউট হয়েছে");
        router.push("/");
        router.refresh();
    };

    const handleUpdateName = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await updateUser({ name });

        setLoading(false);

        if (error) {
            toast.error(error.message || "নাম হালনাগাদ করা যায়নি");
            return;
        }

        toast.success("নাম সফলভাবে হালনাগাদ হয়েছে।");
        router.refresh();
    };

    return (
        <div className="mx-auto mt-8 w-full max-w-2xl">
            <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                    {user.image ? (
                        <Image
                            src={user.image}
                            alt={user.name}
                            width={56}
                            height={56}
                            className="h-14 w-14 rounded-full object-cover"
                        />
                    ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#057C37] text-lg font-semibold text-white">
                            {user.name?.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <div>
                        <p className="text-lg font-semibold text-[#1d271f]">{user.name}</p>
                        <p className="text-sm text-[#1d271f]/60">{user.email}</p>
                    </div>
                </div>

                <button
                    onClick={handleSignOut}
                    className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                    ← সাইন আউট
                </button>
            </div>

            <form
                onSubmit={handleUpdateName}
                className="mt-6 rounded-xl border border-black/5 bg-white p-6 shadow-sm"
            >
                <h2 className="text-base font-semibold text-[#1d271f]">নাম হালনাগাদ করুন</h2>

                <label className="mt-4 block text-sm text-[#1d271f]/80">নাম</label>
                <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#057C37]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 rounded-lg bg-[#057C37] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#057C37]/90"
                >
                    {loading ? "হালনাগাদ হচ্ছে..." : "নাম হালনাগাদ করুন"}
                </button>
            </form>
        </div>
    );
};

export default ProfileCard;
