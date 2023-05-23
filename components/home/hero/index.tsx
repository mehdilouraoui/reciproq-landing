import { HeroScene } from './HeroScene';
import { Button } from '@/components/shared/Button';
import { Highlight } from '@/components/shared/Highlight';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <h1>
                    Le compagnon des psychologues
                    <Highlight color="green" />
                </h1>
                <p>
                    Reciproq est
                    <strong>
                        {' '}
                        un outil conçu par les psychologues, pour les
                        psychologues
                    </strong>
                    pour nous accompagner au quotidien.
                </p>

                <Button scrollTo=".notify">Je reste informé</Button>
            </div>
            <HeroScene />
        </div>
    );
};
