import { atom } from 'jotai'

export const paginationCounterAtom = atom<number>(Number(localStorage.getItem('page')) || 1)
