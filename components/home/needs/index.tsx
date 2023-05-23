import { Giveback, Knowledge, Network, Tech } from '@/components/shared/Picto';
import { FCC } from '@/types';

const data = [
    {
        svg: Network,
        text: 'Bénéficier d’un réseau sécurisé et digne de confiance.',
    },
    {
        svg: Tech,
        text: 'Échanger des conseils techniques et pratiques grâce à la pair aidance.',
    },

    {
        svg: Knowledge,
        text: 'Acquérir de nouvelles connaissances et être au fait des actualités psy grâce à une communauté élargie.',
    },

    {
        svg: Giveback,
        text: 'Recevoir ou donner un soutien moral et partager ses difficultés dans ma safe place.',
    },
];

interface INeed {
    svg: () => JSX.Element;
    text: string;
}

export const Circle = ({ color }: { color: 'green' | 'yellow' }) => {
    return <div className={`circle ${color}`}></div>;
};

export const Need: FCC<INeed> = ({ svg, text }) => {
    const Svg = svg;
    return (
        <div className="need">
            <div className="need-up">
                <div className="need-image">
                    <Svg />
                </div>
                <p>{text}</p>
            </div>
            <div className="need-base"></div>
        </div>
    );
};

export const Needs = () => {
    return (
        <div className="needs">
            <div className="needs-circles">
                <Circle color="green" />
                <Circle color="yellow" />
            </div>
            <h2>Un outil qui répond à mes besoins</h2>
            <div className="need-w">
                {data.map((props, index) => (
                    <Need {...props} key={index} />
                ))}
            </div>
        </div>
    );
};
