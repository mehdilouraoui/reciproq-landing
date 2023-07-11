export const HAS_WINDOW = typeof window !== 'undefined';
export const MOBILE_WIDTH = 875;

export const overflowBodyOn = () => (document.body.style.overflow = 'hidden');
export const overflowBodyOff = () => (document.body.style.overflow = '');

export const toArrayHTML = (element: any) =>
    Array.from(element) as HTMLElement[];

const VALID_MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const isMailValid = (mail: string) => VALID_MAIL_REGEX.test(mail);
export const test = '';
