import { atom } from 'recoil';
import { Tour } from '@/types/QueryTypes';

const toursDataAtom = atom({
    key: 'toursData',
    default: [] as Tour[],
});

export default toursDataAtom;
