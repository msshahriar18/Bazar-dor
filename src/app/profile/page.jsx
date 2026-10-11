import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ProfileCard from "@/components/ProfileCard";

const ProfilePage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
        redirect("/sign-in");
    }

    return (
        <div className="bg-[#EEF3ED] py-16 px-4">
            <h1 className="text-center text-2xl font-bold text-[#1d271f]">
                আমার প্রোফাইল
            </h1>
            <p className="mt-1 text-center text-sm text-[#1d271f]/60">
                আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>

            <ProfileCard user={session.user} />
        </div>
    );
};

export default ProfilePage;
