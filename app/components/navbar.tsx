import { Luggage } from "lucide-react"
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
export default function Navbar(){
    return(
        <header className="sticky top-0 z-10 w-full border-b border-gray-800 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container h-14 flex items-center justify-between mx-auto px-4">
                <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-85 transition-opacity duration-300"
                >
                <Luggage className="h-6 w-6" />
                <span className="font-bold">PRETIUM</span>
                </Link>
                <nav className="flex items-center space-x-4">
                <Link href="/about">
                    <Button variant="ghost">
                        About
                    </Button>
                </Link>
                </nav>
            </div>
        </header>
    );
}