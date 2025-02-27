import { Luggage } from "lucide-react"
import { Button } from '@/components/ui/button';
export default function Navbar(){
    return(
        <header className="sticky top-0 z-10 w-full border-b border-gray-800 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container h-14 flex items-center justify-between mx-auto px-4">
                <a
                href="/"
                className="flex items-center space-x-2 hover:opacity-85 transition-opacity duration-300"
                >
                <Luggage className="h-6 w-6" />
                <span className="font-bold">PRETIUM</span>
                </a>
                <nav className="flex items-center space-x-4">
                <a href="/about">
                    <Button variant="ghost">
                        About
                    </Button>
                </a>
                </nav>
            </div>
        </header>
    );
}