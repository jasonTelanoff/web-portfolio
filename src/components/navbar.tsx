import Link from "next/link";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about_me" },
    { name: "Projects", href: "/projects" },
    { name: "Course Work", href: "/courses" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                    {item.name}
                </Link>
            ))}
        </ul>);
}
