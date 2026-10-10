import { auth } from "@/lib/auth"; // আপনার ব্যাকএন্ড অথ কনফিগারেশন ফাইল
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);