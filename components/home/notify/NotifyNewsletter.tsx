'use client';

import { useState } from 'react';
import { Button } from '@/components/shared/Button';
import { HandUp, Heart } from '@/components/shared/Picto';
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

const NotifyNewsletterOptions = () => {
    const [profil, setProfil] = useState('');
    const [open, setOpen] = useState(false);

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
    return (
        <div className="notify-newsletter">
            <div className="notify-newsletter-controls">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="monadresse@mail.com"
                />
                <div className="notify-newsletter-options">
                    <NotifyNewsletterOptions />
                </div>
                <Button>Entrer</Button>
            </div>
            <span>
                L’équipe Reciproq s’engage à respecter votre vie privée et à ne
                pas diffuser, vendre, partager votre adresse e-mail.
            </span>
            <div className="notify-hand-up">
                <HandUp />
            </div>
            <div className="notify-heart">
                <Heart />
            </div>
        </div>
    );
};
