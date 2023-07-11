'use client';

/* eslint-disable @next/next/no-img-element */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Highlight } from '@/components/shared/Highlight';
import { MobileWrapper } from '@/components/shared/MobileWrapper';
import { QuoteMark } from '@/components/shared/Picto';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { FCC } from '@/types';

gsap.registerPlugin(ScrollTrigger);

interface IPhylactery {
    top: number;
    left: number;
    width: number;
    color: 'yellow' | 'blue' | 'green' | 'lightblue';
    index: number;
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
    index: number;
}

const Phylactery: FCC<IPhylactery> = ({
    color,
    children,
    top,
    left,
    width,
    index,
}) => {
    return (
        <div
            className={`phylactery ${color}`}
            id={`phylactery--${index}`}
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
    index,
}) => {
    return (
        <div
            className="identity"
            id={`identity--${index}`}
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
    const elements = [
        { trigger: '#phylactery--0', target: '#identity--0' },
        { trigger: '#phylactery--1', target: '#identity--1' },
        { trigger: '#phylactery--2', target: '#identity--2' },
        { trigger: '#phylactery--3', target: '#identity--3' },
        { trigger: '#phylactery--4', target: '#identity--4' },
    ];
    useIsomorphicLayoutEffect(() => {
        elements.forEach(({ trigger, target }) => {
            gsap.set([trigger, target], {
                opacity: 0,
            });
            gsap.to([trigger, target], {
                scrollTrigger: {
                    trigger,
                    start: 'center center',
                },
                opacity: 1,
                stagger: 0.15,
            });
        });
    }, []);

    return (
        <div className="verbatims">
            <h1>
                Pour tous les psychologues disposant d’un{' '}
                <strong>numéro ADELI</strong>
                <Highlight color="blue" />
            </h1>
            <div className="verbatims-items">
                <Phylactery
                    color="blue"
                    top={25.5}
                    left={10.5}
                    width={50}
                    index={0}
                >
                    Je cherche un psychologue expert des troubles anxieux pour
                    réorienter un patient dans sa ville.
                </Phylactery>
                <Phylactery
                    color="green"
                    top={31.5}
                    left={94.5}
                    width={34}
                    index={1}
                >
                    Je propose de former un groupe d’intervision proche de mon
                    lieu de travail ou à distance.
                </Phylactery>
                <Phylactery
                    color="yellow"
                    top={66}
                    left={85}
                    width={41}
                    index={2}
                >
                    Je partage mon ressenti et mes difficultés dans ma safe
                    place de consoeurs proches.
                </Phylactery>
                <Phylactery
                    color="blue"
                    top={87.5}
                    left={46.5}
                    width={39}
                    index={3}
                >
                    Je propose de former un groupe d’intervision proche de mon
                    lieu de travail ou à distance.
                </Phylactery>
                <Phylactery
                    color="lightblue"
                    top={53}
                    left={5}
                    width={31}
                    index={4}
                >
                    Je partage mon ressenti et mes difficultés dans ma safe
                    place de consoeurs proches.
                </Phylactery>
                <MobileWrapper className="identity-w">
                    <Identity
                        index={0}
                        img="/assets/img/maud.png"
                        name="Maud"
                        id="#098567354"
                        city="Tarbes"
                        label1="Libéral"
                        label2="Troubles alimentaires"
                        top={40}
                        left={40}
                    />
                    <Identity
                        index={1}
                        img="/assets/img/anne.png"
                        name="Anne"
                        id="#098567312"
                        city="Besançon"
                        label1="Libéral"
                        label2="Troubles de l'humeur"
                        top={48}
                        left={101}
                    />
                    <Identity
                        index={2}
                        img="/assets/img/guillaume.png"
                        name="Guillaume"
                        id="#098Z92939"
                        city="Le Controis-en-Sologne"
                        label1="Libéral"
                        label2="Troubles anxieux"
                        top={80.5}
                        left={105}
                    />
                    <Identity
                        index={3}
                        img="/assets/img/mehdi.png"
                        name="Mehdi"
                        id="#098567230"
                        city="Montauban"
                        label1="Libéral"
                        label2="Troubles psychotiques"
                        top={104}
                        left={48}
                    />
                    <Identity
                        index={4}
                        img="/assets/img/marie.png"
                        name="Marie"
                        id="#098532009"
                        city="Bordeaux"
                        label1="Clinique"
                        label2="ESPT"
                        top={71}
                        left={15}
                    />
                </MobileWrapper>
            </div>
        </div>
    );
};
