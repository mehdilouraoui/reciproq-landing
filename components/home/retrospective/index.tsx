/* eslint-disable react/no-unescaped-entities */
import { Kinesis } from '@/components/animations/Kinesis';
import { Curve, Sign } from '@/components/shared/Picto';
import { FCC } from '@/types';

const cards = [
    {
        year: '2021',
        month: 'Novembre',
        description:
            'Salarié d’une entreprise, Clément est aussi un patient qui suit une psychothérapie. Avec son regard double, de psychologue et patient, il se dit qu’un outil d’aide à la prise en charge thérapeutique pourrait aider les deux parties dans le suivi de la thérapie et dans la construction du parcours. Il décide d’en parler à son amie Caroline, avec qui il a fait ses études de psychologie.',
    },
    {
        year: '2022',
        month: 'Janvier',
        description:
            'Trois constats : Caroline pointe la surcharge de travail dans le métier et la fatigue de ses collègues. Une étude portant sur 9000 psychologues rapporte que plus de la moitié montrent des signes de burnout1. Le nombre de consultations est passée de 3 à 6 millions depuis le Covid, pour le même nombre de psychologues2.',
    },
    {
        year: '2022',
        month: 'Février',
        description:
            'C’est le début de l’aventure Reciproq ! Ils rencontrent Lucas, un développeur, afin de réfléchir ensemble à l’élaboration d’une solution digitale d’aide aux psychologues. De longues discussions laissent émerger de premières idées.',
    },
    {
        year: '2022',
        month: 'Mars - Mai',
        description:
            'Caroline et Clément échangent avec des psychologues de leur entourage, les questionnent sur ce qu’ils vivent au quotidien. C’est le début d’une démarche de Design Thinking.',
    },
    {
        year: '2022',
        month: 'Juin',
        description:
            'Le projet vaut le coup, les psychologues manifestent des besoins non satisfaits. Clément décide de quitter son job salarié pour se lancer pleinement dans l’aventure.',
    },
    {
        year: '2022',
        month: 'Septembre - Octobre',
        description:
            "Lucas s’engage sur une autre aventure l'entrepreneuriale. Caroline et Clément rencontrent 10 psys pour sonder les besoins réels pour être épanoui au travail, et pour connaître les difficultés actuelles. Entrée dans l’incubateur Arc Sud Développement.",
    },
    {
        year: '2022',
        month: 'Novembre',
        description:
            'Analyse des interviews, trois grands besoins se précisent. Début des 8 interviews pour connaître les usages que les psys ont déjà pour se faire une idée plus précise des usages réels des psychologues.',
    },
    {
        year: '2022',
        month: 'Décembre',
        description:
            'Business plan rédigé, la stratégie est posée. Il faut se lancer et trouver un Designer capable d’approfondir la recherche utilisateurs et de construire un prototype adapté aux besoins. Lola et Ladislas, couple de graphistes et amis se retroussent les manches pour trouver une identité graphique et un logo à Reciproq',
    },
    {
        year: '2023',
        month: 'Janvier',
        description:
            'Felipe, Head of Design rejoint l’équipe. Passionné par le projet et le sens qu’il porte, il décide de prendre en charge la conception produit et de structurer la démarche jusqu’à la sortie du premier produit prévue en septembre 2023.',
    },
];

export const Retrospective = () => {
    return (
        <div className="retrospective">
            <h2>Retrospective</h2>
            <div className="retrospective-curve">
                <Curve />
            </div>
            <div className="retrospective-cards">
                {cards.map((card, index) => (
                    <RetrospectiveCard {...card} key={index} />
                ))}
            </div>
            <div className="retrospective-sign">
                <span>
                    Et on <strong>2023</strong> on crée l'outil
                </span>
                <Sign />
            </div>
        </div>
    );
};

interface IRetrospectiveCard {
    year: string;
    month: string;
    description: string;
}

export const RetrospectiveCard: FCC<IRetrospectiveCard> = ({
    year,
    month,
    description,
}) => {
    return (
        <Kinesis
            speed={7}
            className="retrospective-card--kinesis"
            subClassName="retrospective-card--kinesis-item"
        >
            <div className="retrospective-card">
                <div className="retrospective-card-year">{year}</div>
                <div className="retrospective-card-month">{month}</div>
                <div className="retrospective-card-desc">{description}</div>
            </div>
        </Kinesis>
    );
};
