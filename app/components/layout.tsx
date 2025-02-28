import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        checkMobile();
    
        window.addEventListener('resize', checkMobile);
    
        return () => window.removeEventListener('resize', checkMobile);
      }, []);
    
      useEffect(() => {
        AOS.init({
          once: true,
          easing: 'ease-in-out',
          disable: isMobile,
        });
      }, [isMobile]);

    return (
        <html lang="en">
            <body className="bg-background min-h-screen text-foreground font-geist flex flex-col">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
