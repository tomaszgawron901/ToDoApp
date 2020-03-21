import {dataActionTypes} from './types';
import { IDataState } from '../reducers/NoteDataReducer';

let _curentID: number = -1;

export const curentID = () => _curentID;

export const addNote = () => ({
    type: dataActionTypes.ADD_TODO,
    id: ++_curentID,
    date: new Date()
});

export const delNote = (id: number) => ({
    type: dataActionTypes.DEL_TODO,
    id: id
});

export const updateNote = (id: number, note: IDataState) => ({
    type: dataActionTypes.UPDATE_TODO,
    id: id,
    ...note
});