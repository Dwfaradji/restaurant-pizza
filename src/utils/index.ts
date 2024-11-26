// Utilitaire pour joindre les classes CSS
export const cx = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ');
