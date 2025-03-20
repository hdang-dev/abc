import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';

export const Header = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="bg-white w-fit shadow-inner rounded-[40px] px-[150px] py-3">
                <div className="flex justify-between items-center gap-[64px]">
                    {/* Logo */}
                    <Link href="/">
                        <Image src="/foso_logo.svg" alt="FOSO Logo" width="134" height="55" />
                    </Link>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex items-center gap-2 text-sm">
                            <li>
                                <Link href="#" className="p-2">Về Chúng tôi</Link>
                            </li>
                            <li>
                                <Dropdown
                                    items={["Giải pháp 1", "Giải pháp 2"].map((title, index) => <Link key={index} className="py-2" href="#">{title}</Link>)}
                                >
                                    <div className="flex gap-2 items-center p-2">
                                        <span>Giải pháp</span>
                                        <ChevronDownIcon className="size-4" />
                                    </div>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown
                                    items={["Tài nguyên 1", "Tài nguyên 2"].map((title, index) => <Link key={index} href="#">{title}</Link>)}
                                >
                                    <div className="flex gap-2 items-center p-2 font-bold relative">
                                        <span>Tài nguyên</span>
                                        <ChevronDownIcon className="size-4" />
                                        <div className="size-1.5 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 bg-[var(--primary)]"></div>
                                    </div>
                                </Dropdown>
                            </li>
                            <li>
                                <Link href="#" className="p-2">Liên hệ</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Other actions */}
                    <div className="flex gap-2.5">
                        <Dropdown
                            items={["VI", "EN"].map((title, index) => <Link key={index} href="#">{title}</Link>)}
                        >
                            <div className="flex items-center p-2 rounded-[40px] bg-linear-to-bl from-[rgba(9,9,11,5%)] to-[rgba(9,9,11,10%)]">
                                <Image src="/vi_icon.svg" alt="vi icon" width="24" height="24" />
                                <span className="pl-3 pr-1">VI</span>
                                <ChevronDownIcon className="size-4" />
                            </div>
                        </Dropdown>

                        <button className="btn bg-[var(--primary)] rounded-[40px]">
                            <div className="flex gap-3 items-center">
                                <span className="font-bold">Trở Thành Khách Hàng</span>
                                <div className="rounded-full bg-black p-1.5">
                                    <ArrowUpRightIcon className="size-3 text-white" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Dropdown = ({ children, items }: { children: React.ReactNode, items: React.ReactNode[]; }) => {
    return (
        <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="">
                {children}
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 shadow-sm p-0 w-fit min-w-18">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};;