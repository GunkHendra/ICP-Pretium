import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
            easing: 'ease-in-out',
            offset: 50,
        });
    }, []);

    return <>{children}</>;
}
