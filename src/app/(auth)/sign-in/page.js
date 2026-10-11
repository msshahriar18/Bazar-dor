"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";

const SignInPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await signIn.email({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে");
            return;
        }

        toast.success("সাইন ইন সফল হয়েছে");
        router.push("/");
    };

    return (
        <div className="bg-[#EEF3ED] py-16 px-4">
            <h1 className="text-center text-2xl font-bold text-[#1d271f]">
                সাইন ইন
            </h1>
            <p className="mt-1 text-center text-sm text-[#1d271f]/60">
                বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>

            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 w-full max-w-sm rounded-xl border border-black/5 bg-white p-6 shadow-sm"
            >
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
                    className="mt-1 mb-6 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#057C37]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-[#057C37] py-2.5 text-sm font-semibold text-white transition hover:bg-[#057C37]/90"
                >
                    {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                </button>

                <p className="mt-5 text-center text-sm text-[#1d271f]/70">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link href="/sign-up" className="font-semibold text-[#057C37]">
                        সাইন আপ করুন
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

export default SignInPage;
