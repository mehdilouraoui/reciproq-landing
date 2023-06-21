import Link from 'next/link';
import { NotifyNewsletter } from './NotifyNewsletter';
import { GreenHeart } from '@/components/shared/Picto';

export const Notify = () => {
    return (
        <div className="notify">
            <h1>Notifiez-moi pour adopter mon compagnon psy</h1>
            <p>
                En partageant votre adresse email, vous serez prévenu.e de la
                date de sortie de Reciproq. Veuillez renseigner votre adresse
                mail ainsi que votre profil psychologue.
            </p>
            <NotifyNewsletter />

            <div className="notify-footer">
                <Link href="/">Mentions Légales</Link>
                <GreenHeart />
                <Link href="/">CGU</Link>
                <GreenHeart />
                <Link href="/">Politiques de confidentialité</Link>
            </div>
        </div>
    );
};
