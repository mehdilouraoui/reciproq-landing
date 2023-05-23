import { GridHelper } from '@/components/shared/GridHelper';
import { Logo } from '@/components/shared/Logo';
import { LenisFactory } from '@/hooks/useLenis';
import { WindowSize } from '@/hooks/useWindowSize';
import '../styles/index.scss';

export const metadata = {
    title: 'Reciproq',
    description: 'Le compagnon des psychologues.',
};

interface IRootLayout {
    children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
    return (
        <html lang="en">
            <body>
                <WindowSize />
                <LenisFactory />
                <main className="page">
                    <Logo />
                    <GridHelper />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
