import Link from "next/link";
import { IBreadcrumProps } from "./type";

export const Breadcrumb = ({ items }: IBreadcrumProps) => {
    return (
        <div className="breadcrumbs text-sm">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {(typeof item === 'string') ? (
                            <Link href="#" className={`${index === items.length - 1 ? 'font-bold' : ''}`}>{item}</Link>
                        ) : (
                            <Link href={item.link} className={`${index === items.length - 1 ? 'font-bold' : ''}`}>{item.text}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};