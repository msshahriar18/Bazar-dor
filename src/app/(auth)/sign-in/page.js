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

    const handleSocialSignIn = (provider) => {
        signIn.social({ provider, callbackURL: "/" });
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

                <div className="my-5 flex items-center gap-3">
                    <div className="h-px flex-1 bg-black/10" />
                    <span className="text-xs text-[#1d271f]/50">অথবা</span>
                    <div className="h-px flex-1 bg-black/10" />
                </div>

                <button
                    type="button"
                    onClick={() => handleSocialSignIn("google")}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-white py-2.5 text-sm font-medium text-[#1d271f] transition hover:bg-black/5"
                >
                    <svg width="18" height="18" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z" />
                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.9 18.9 13 24 13c3.1 0 5.9 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4c-7.7 0-14.3 4.4-17.7 10.7z" />
                        <path fill="#4CAF50" d="M24 44c5.4 0 10.3-1.8 14.1-5.1l-6.5-5.4C29.5 35.3 26.9 36 24 36c-5.4 0-9.8-3.4-11.4-8.1l-6.5 5C9.6 39.6 16.2 44 24 44z" />
                        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.8-6.6 7.5l6.5 5.4C39.1 37.5 44 31.5 44 24c0-1.2-.1-2.4-.4-3.5z" />
                    </svg>
                    গুগল দিয়ে সাইন ইন করুন
                </button>

                <button
                    type="button"
                    onClick={() => handleSocialSignIn("github")}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-white py-2.5 text-sm font-medium text-[#1d271f] transition hover:bg-black/5"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    গিটহাব দিয়ে সাইন ইন করুন
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
