"use client";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    // contoh dummy data
    const data = [
        { name: "dira", age: 20 },
        { name: "affan", age: 24 },
        { name: "dita", age: 17 },
    ];

    const router = useRouter();

    // useEffect(() => {
    //     router.push("/page2");
    // }, []);

    return (
        <div className="min-h-[100vh] bg-white flex flex-col items-center">
            Landing page

            {/* contoh pindah halaman dengan useRouter */}
            <button
                onClick={() => router.push("/page2")}
                className="p-2 bg-gray-500 rounded-xl mt-2 text-white"
            >
                page 2
            </button>

            {/* contoh pindah halaman dengan Link */}
            <Link href="/page3">
                <button className="p-2 bg-gray-500 rounded-xl mt-2 text-white">
                    page 3
                </button>
            </Link>
            <Link href="/login">
                <button className="bg-blue-500 p-2 mt-2 rounded-xl">
                    Login
                </button>
            </Link>

            {/* contoh looping */}
            <div className="grid grid-cols-3 gap-3 mt-2">
                {data.map((item, index) => (
                    <div key={index}>
                        <Card name={item.name} age={item.age} />
                    </div>
                ))}
            </div>

            {/* contoh looping list */}
            <ul className="mt-2 flex flex-col gap-2 w-80">
                {data.map((item, index) => (
                    <li key={index} className="bg-blue-600 p-2 text-white rounded-md w-full">{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
