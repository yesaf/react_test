import { atom } from 'recoil';

const favoritesAtom = atom({
    key: 'favorites',
    default: [] as string[],
});

export default favoritesAtom;
