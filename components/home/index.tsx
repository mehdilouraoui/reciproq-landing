import { BigIdea } from './big-idea';
import { CloudyLines } from './cloudy-lines';
import { Community } from './community';
import { Hero } from './hero';
import { Needs } from './needs';
import { Notify } from './notify';
import { Retrospective } from './retrospective';
import { Teams } from './teams';
import { Verbatims } from './verbatims';
import { FCC } from '@/types';

export const Home: FCC = () => {
    return (
        <section className="home">
            <Hero />
            <Needs />
            <Verbatims />
            <BigIdea />
            <Community />
            <CloudyLines />
            <Teams />
            <Retrospective />
            <Notify />
        </section>
    );
};
