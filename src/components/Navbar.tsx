'use client'

import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex gap-6 p-4 shadow-md">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}