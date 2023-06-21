import { TrackedEyesMascot } from '@/components/shared/Picto';

export const BigIdea = () => {
    return (
        <div className="big-idea">
            <div className="big-idea-mascot">
                <TrackedEyesMascot />
            </div>
            <p>
                Grâce à une méthode qui met <strong>les psychologues</strong> au
                centre de nos réflexions, nous concevons un outil intuitif et
                adapté à leurs usages.
            </p>
            <div className="big-idea-circle">
                <div className="inner"></div>
            </div>
        </div>
    );
};
