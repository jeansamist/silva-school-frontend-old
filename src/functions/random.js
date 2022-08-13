export function randomInterval(min = 0, max = 1) {
  return Math.random() * (max - min + 1) + min;
}
/**
 * Créer une clé aléatoirement
 * @param { Number } lenght Nombres de caractères de la clé
 * @returns { String }
 */
export const randomString = (lenght = 10) => {
  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789a';
  let key = '';
  for (let i = 0; i < lenght; i++) {
    const element = symbols[Math.round(Math.random() * (symbols.length - 1))];
    key = key + element;
  }
  return key;
};
