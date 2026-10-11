"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { signUp } from "@/lib/auth-client";

const SignUpPage = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("পাসওয়ার্ড মিলছে না");
            return;
        }

        setLoading(true);

        const { error } = await signUp.email({
            name,
            email,
            password,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "সাইন আপ ব্যর্থ হয়েছে");
            return;
        }

        toast.success("অ্যাকাউন্ট তৈরি হয়েছে, স্বাগতম");
        router.push("/");
        router.refresh();
    };

    return (
        <div className="bg-[#EEF3ED] py-16 px-4">
            <h1 className="text-center text-2xl font-bold text-[#1d271f]">
                অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="mt-1 text-center text-sm text-[#1d271f]/60">
                বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
            </p>

            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 w-full max-w-sm rounded-xl border border-black/5 bg-white p-6 shadow-sm"
            >
                <label className="text-sm text-[#1d271f]/80">নাম</label>
                <input
                    type="text"
                    placeholder="যেমন: রহিম উদ্দিন"
                    className="mt-1 mb-4 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#057C37]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label className="text-sm text-[#1d271f]/80">ইমেইল</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 mb-4 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#057C37]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className="text-sm text-[#1d271f]/80">পাসওয়ার্ড</label>
                <input
                    type="password"
                    placeholder="কমপক্ষে ৮ অক্ষর"
                    className="mt-1 mb-4 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#057C37]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label className="text-sm text-[#1d271f]/80">পাসওয়ার্ড নিশ্চিত করুন</label>
                <input
                    type="password"
                    placeholder="আবার লিখুন"
                    className="mt-1 mb-6 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#057C37]"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-[#057C37] py-2.5 text-sm font-semibold text-white transition hover:bg-[#057C37]/90"
                >
                    {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
                </button>

                <p className="mt-5 text-center text-sm text-[#1d271f]/70">
                    আগে থেকে অ্যাকাউন্ট আছে?{" "}
                    <Link href="/sign-in" className="font-semibold text-[#057C37]">
                        সাইন ইন করুন
                    </Link>
                </p>
            </form>

            <Link
                href="/"
                className="mt-6 block text-center text-sm text-[#1d271f]/50 hover:text-[#1d271f]/80"
            >
                ← হোম পেজে ফিরে যান
            </Link>
        </div>
    );
};

export default SignUpPage;
