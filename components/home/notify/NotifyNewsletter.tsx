'use client';

import { gsap } from 'gsap';
import { FC, useState } from 'react';
import { Button } from '@/components/shared/Button';
import { Arrow, Heart, MascotWithHeart } from '@/components/shared/Picto';
import { isMailValid } from '@/lib';

const profils = [
    'Libéral',
    'Institution',
    'Entreprise',
    'Mixte',
    'Chercheur',
    'Justice',
    'Santé ',
    'Education',
    'Autre',
];

interface NotifyNewsletterOptionsProps {
    setProfil: (str: string) => void;
    profil: string;
    setOpen: (bool: boolean) => void;
    open: boolean;
}

const NotifyNewsletterOptions: FC<NotifyNewsletterOptionsProps> = ({
    profil,
    setProfil,
    open,
    setOpen,
}) => {
    return (
        <div className="notify-newsletter-option">
            <span
                className="notify-newsletter-option-current"
                onClick={() => setOpen(!open)}
            >
                {!profil ? 'mon profil psy' : profil}
            </span>
            {open && (
                <ul>
                    <li>Statut</li>
                    {profils.map((_profil, index) => (
                        <li
                            className={profil === _profil ? 'active' : ''}
                            onClick={() => {
                                setProfil(_profil);
                                setOpen(false);
                            }}
                            key={index}
                        >
                            {_profil}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export const NotifyNewsletter = () => {
    const [profil, setProfil] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);

    const addContact = async (email: string, statut: string) => {
        await fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({
                email,
                statut,
            }),
        })
            .then(res => {
                if (res.status === 200) {
                    wink();
                }
            })
            .catch(err => console.log({ err }));
    };

    const wink = () => {
        const tl = gsap.timeline();
        tl.set('.notify-newsletter-validate-heart svg', {
            opacity: 1,
        })
            .to(['.notify-newsletter-validate-heart svg'], {
                y: '-10rem',
                stagger: 0.03,
                duration: 2.5,
            })
            .to(
                '.notify-newsletter-validate-heart svg',
                {
                    opacity: 0,
                    duration: 2.5,
                },
                '<0.2',
            );
    };

    return (
        <div className="notify-newsletter">
            <div className="notify-newsletter-controls">
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={event => setEmail(event.currentTarget.value)}
                    placeholder="monadresse@mail.com"
                />
                <div className="notify-newsletter-options">
                    <NotifyNewsletterOptions
                        profil={profil}
                        setProfil={setProfil}
                        open={open}
                        setOpen={setOpen}
                    />
                </div>
                <Button
                    disabled={!isMailValid(email) || !profil}
                    onClick={() => addContact(email, profil)}
                >
                    Entrer
                </Button>
            </div>
            <span>
                L’équipe Reciproq s’engage à respecter votre vie privée et à ne
                pas diffuser, vendre, partager votre adresse e-mail.
            </span>

            <MascotWithHeart />
            <Arrow />
            <div className="notify-newsletter-validate-heart">
                <Heart />
                <Heart />
                <Heart />
                <Heart />
            </div>
        </div>
    );
};
