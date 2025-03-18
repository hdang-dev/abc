import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';

export const Header = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-fit shadow-inner rounded-[40px] px-[150px] py-3">
                <div className="flex justify-between items-center gap-[64px]">
                    {/* Logo */}
                    <Link href="/">
                        <Image src="/foso_logo.svg" alt="FOSO Logo" width="134" height="55" />
                    </Link>


                    {/* Navigation */}
                    <nav>
                        <ul className="flex items-center gap-2">
                            <li>
                                <Link href="#" className="p-2">About Us</Link>
                            </li>
                            <li>
                                <Dropdown title="Solution" items={["Solution 1", "Solution 2"]} />
                            </li>
                            <li>
                                <Dropdown title="Resource" items={["Resource 1", "Resource 2"]} />
                            </li>
                            <li>
                                <Link href="#" className="p-[8px]">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Other actions */}
                    <div className="flex gap-2.5">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className="px-3 py-2 cursor-pointer rounded-[40px] bg-linear-to-bl from-[rgba(9,9,11,5%)] to-[rgba(9,9,11,10%)]">
                                <div className="flex items-center">
                                    <Image src="/vi_icon.svg" alt="vi icon" width="24" height="24" />
                                    <span className="pl-3 pr-1">VI</span>
                                    <ChevronDownIcon className="size-4" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-22">
                                <li><Link href="#">VI</Link></li>
                                <li><Link href="#">EN</Link></li>
                            </ul>
                        </div>

                        <button className="btn bg-[#1ad598] rounded-[40px]">
                            <div className="flex gap-3 items-center">
                                <span>Become Our Customer</span>
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

const Dropdown = ({ title, items }: { title: string, items: string[]; }) => {
    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="p-2 cursor-pointer flex gap-2 items-center">
                <span>{title}</span>
                <ChevronDownIcon className="size-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-38">
                {items.map((item, index) => (
                    <li key={index}><Link href="#">{item}</Link></li>
                ))}
            </ul>
        </div>
    );
};