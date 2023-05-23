import { Parallax } from '@/components/animations/Parallax';
import { Mascot, Ellipse, Cloud } from '@/components/shared/Picto';

export const HeroScene = () => {
    return (
        <div className="scene">
            <div className="clouds">
                <div className="cloud">
                    <Parallax speed={-0.8} position="top" id="hero-cloud-1">
                        <Cloud />
                    </Parallax>
                </div>
                <div className="cloud">
                    <Parallax speed={1.5} position="top" id="hero-cloud-2">
                        <Cloud />
                    </Parallax>
                </div>
                <div className="cloud">
                    <Parallax speed={-1} position="top" id="hero-cloud-3">
                        <Cloud />
                    </Parallax>
                </div>
                <div className="cloud">
                    <Parallax speed={1.5} position="top" id="hero-cloud-4">
                        <Cloud />
                    </Parallax>
                </div>
            </div>

            <div className="mascot">
                <Mascot />
            </div>
            <div className="floor">
                <Ellipse />
            </div>
        </div>
    );
};
