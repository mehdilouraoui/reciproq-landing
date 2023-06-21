import { Circle } from '../needs';
import { Kinesis } from '@/components/animations/Kinesis';
import { Parallax } from '@/components/animations/Parallax';
import { BlueMascot, Psy } from '@/components/shared/Picto';

/* eslint-disable @next/next/no-img-element */
export const Teams = () => {
    return (
        <div className="teams">
            <div className="teams-picto picto-1">
                <Parallax id="picto-prlx-1" speed={0.5}>
                    <BlueMascot />
                </Parallax>
            </div>
            <div className="teams-picto picto-2">
                <Parallax id="picto-prlx-2" speed={-0.5}>
                    <Psy />
                </Parallax>
            </div>
            <div className="teams-founder">
                <p>Clément,</p>
                <p>Caroline,</p>
                <p>Felipe</p>
            </div>
            <div className="teams-circles">
                <Circle color="green" />
                <Circle color="yellow" />
            </div>
            <div className="teams-description">
                <div className="teams-description-img">
                    <img
                        src="/assets/img/people.png"
                        alt="trois personnes qui sourient"
                    />
                </div>

                <div className="teams-description-content">
                    <p>
                        Le projet Reciproq repose sur trois personnes qui
                        s’entendent sur des valeurs communes.
                        <strong>Écologie, égalité, solidarité</strong>
                        ou encore
                        <strong>justice sociale</strong>, ces thèmes sont la
                        colonne vertébrale des réflexions qui nous animent.
                        Chaque étape du développement de Reciproq, chaque
                        décision stratégique actuelle et futures sera considéré
                        selon le prisme de ces valeurs que nous partageons.
                        C’est la volonté conjointe des associés. Pensé pour être
                        au service des psychologues, mais aussi au service d’une
                        société plus juste et durable.
                    </p>

                    <p>
                        Nous remercions tout particulièrement{' '}
                        <strong>Lola</strong> et <strong>Laad</strong> pour leur
                        aide précieuse afin de concevoir ensemble notre identité
                        graphique.
                    </p>
                </div>
                <div className="teams-description-labels">
                    <Kinesis speed={0} replaceOnLeave>
                        <div className="teams-description-labels-item">
                            Réciprocité
                        </div>
                    </Kinesis>

                    <Kinesis speed={0} replaceOnLeave>
                        <div className="teams-description-labels-item">
                            Confiance
                        </div>
                    </Kinesis>
                    <Kinesis speed={0} replaceOnLeave>
                        <div className="teams-description-labels-item">
                            Transparence
                        </div>
                    </Kinesis>
                    <Kinesis speed={0} replaceOnLeave>
                        <div className="teams-description-labels-item">
                            Convivialité
                        </div>
                    </Kinesis>
                </div>
            </div>
        </div>
    );
};
