/* eslint-disable @next/next/no-img-element */
import { Highlight } from '@/components/shared/Highlight';
import { MobileWrapper } from '@/components/shared/MobileWrapper';
import { QuoteMark } from '@/components/shared/Picto';
import { FCC } from '@/types';

interface IPhylactery {
    top: number;
    left: number;
    width: number;
    color: 'yellow' | 'blue' | 'green' | 'lightblue';
}

interface IIdentity {
    top: number;
    left: number;
    id: string;
    name: string;
    label1: string;
    label2: string;
    city: string;
    img: string;
}

const Phylactery: FCC<IPhylactery> = ({
    color,
    children,
    top,
    left,
    width,
}) => {
    return (
        <div
            className={`phylactery ${color}`}
            style={{
                top: `${top}rem`,
                left: `${left}rem`,
                width: `${width}rem`,
            }}
        >
            <div className="quote-mark">
                <QuoteMark />
            </div>
            {children}
            <div className="quote-mark">
                <QuoteMark />
            </div>
        </div>
    );
};

const Identity: FCC<IIdentity> = ({
    id,
    name,
    label1,
    label2,
    city,
    img,
    top,
    left,
}) => {
    return (
        <div
            className="identity"
            style={{
                top: `${top}rem`,
                left: `${left}rem`,
            }}
        >
            <div className="identity-img">
                <img src={img} alt="img" />
            </div>
            <div className="identity-infos">
                <div className="identity-infos-id">
                    <strong>{name}</strong>
                    <span>{id}</span>
                </div>
                <div className="identity-infos-city">{city}</div>
                <div className="identity-infos-labels">
                    <div className="label label-yellow">{label1}</div>
                    <div className="label label-green">{label2}</div>
                </div>
            </div>
        </div>
    );
};

export const Verbatims = () => {
    return (
        <div className="verbatims">
            <h1>
                Pour tous les psychologues disposant d’un{' '}
                <strong>numéro ADELI</strong>
                <Highlight color="blue" />
            </h1>
            <div className="verbatims-items">
                <Phylactery color="blue" top={25.5} left={10.5} width={50}>
                    Je cherche un psychologue expert des troubles anxieux pour
                    réorienter un patient dans sa ville.
                </Phylactery>
                <Phylactery color="green" top={31.5} left={94.5} width={34}>
                    Je propose de former un groupe d’intervision proche de mon
                    lieu de travail ou à distance.
                </Phylactery>
                <Phylactery color="yellow" top={66} left={85} width={41}>
                    Je partage mon ressenti et mes difficultés dans ma safe
                    place de consoeurs proches.
                </Phylactery>
                <Phylactery color="blue" top={87.5} left={46.5} width={39}>
                    Je propose de former un groupe d’intervision proche de mon
                    lieu de travail ou à distance.
                </Phylactery>
                <Phylactery color="lightblue" top={53} left={5} width={31}>
                    Je partage mon ressenti et mes difficultés dans ma safe
                    place de consoeurs proches.
                </Phylactery>
                <MobileWrapper className="identity-w">
                    <Identity
                        img="/assets/img/guillaume.png"
                        name="Guillaume"
                        id="#098567354"
                        city="Le Controis-en-Sologne"
                        label1="Libéral"
                        label2="Troubles anxieux"
                        top={40}
                        left={40}
                    />
                    <Identity
                        img="/assets/img/guillaume.png"
                        name="Guillaume"
                        id="#098567354"
                        city="Le Controis-en-Sologne"
                        label1="Libéral"
                        label2="Troubles anxieux"
                        top={48}
                        left={101}
                    />
                    <Identity
                        img="/assets/img/guillaume.png"
                        name="Guillaume"
                        id="#098567354"
                        city="Le Controis-en-Sologne"
                        label1="Libéral"
                        label2="Troubles anxieux"
                        top={80.5}
                        left={105}
                    />
                    <Identity
                        img="/assets/img/guillaume.png"
                        name="Guillaume"
                        id="#098567354"
                        city="Le Controis-en-Sologne"
                        label1="Libéral"
                        label2="Troubles anxieux"
                        top={104}
                        left={48}
                    />
                    <Identity
                        img="/assets/img/guillaume.png"
                        name="Guillaume"
                        id="#098567354"
                        city="Le Controis-en-Sologne"
                        label1="Libéral"
                        label2="Troubles anxieux"
                        top={71}
                        left={15}
                    />
                </MobileWrapper>
            </div>
        </div>
    );
};
