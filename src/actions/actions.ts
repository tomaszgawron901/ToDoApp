import {dataActionTypes} from './types';

let nextID = 0;

export const addNote = () => ({
    type: dataActionTypes.ADD_TODO,
    id: nextID++,
    date: new Date()
});

export const delNote = (id: number) => ({
    type: dataActionTypes.DEL_TODO,
    id: id
});

export const updateNote = (id: number) => ({
    type: dataActionTypes.UPDATE_TODO,
    id: id  // TODO
});