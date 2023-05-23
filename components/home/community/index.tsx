import { Circle } from '../needs';
import { Highlight } from '@/components/shared/Highlight';

export const Community = () => {
    return (
        <div className="community">
            <h1>
                Je rejoins une communauté de psychologues de confiance
                <Highlight color="orange" />
            </h1>
            <p>
                L’outil Reciproq va me permettre de bénéficier de l’aide dont
                j’ai besoin.
            </p>
            <div className="community-circles">
                <Circle color="green" />
                <Circle color="yellow" />
            </div>
        </div>
    );
};
