import Navbar from '@/components/navbar';
import 'aos/dist/aos.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className="bg-background min-h-screen text-foreground font-geist flex flex-col">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
