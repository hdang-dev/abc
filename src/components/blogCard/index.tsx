'use client';

import Image from "next/image";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";

export const BlogCard = () => {
    const router = useRouter();
    const goToDetailPage = () => {
        router.push('/blog');
    };
    return (
        <div>
            <Image src="/blog.svg" alt="Blog" width={100} height={100} style={{ width: "100%", height: "auto" }} />
            <div className="mt-6 flex flex-col gap-4">
                <div className="badge badge-soft badge-info">Quản Lý Sản Xuất</div>
                <h2 className="font-extrabold text-2xl">Tại sao BOM quan trọng trong quản lý sản xuất?</h2>
                <div className="flex">
                    <div className="flex gap-2">
                        <CalendarIcon className="size-6" />
                        <span>17/11/2022</span>
                    </div>
                    <div className="divider divider-horizontal" />
                    <div className="flex gap-2">
                        <ClockIcon className="size-6" />
                        <span>10 phút đọc</span>
                    </div>
                </div>
                <button className="flex gap-4 py-2.5 w-fit text-lg cursor-pointer" onClick={() => goToDetailPage()}>
                    Khám phá thêm
                    <ArrowRightIcon className="size-6" />
                </button>
            </div>
        </div>
    );
};