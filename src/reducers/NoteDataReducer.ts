import {dataActionTypes} from '../actions/types';
import NoteColors from '../constans/NoteColors';

export interface IDataState {
    title: string;
    text: string;
    color: NoteColors;
    date: Date;
}

const defaultState = (): IDataState => ({
    title: '',
    text: '',
    color: NoteColors.white,
    date: new Date(0)
});

export default (state: IDataState = defaultState(), action: any): IDataState => {
    switch (action.type) {
        case dataActionTypes.ADD_TODO: {
            return {
                title: '',
                text: '',
                color: NoteColors.white,
                date: action.date
            };
        }
        case dataActionTypes.UPDATE_TODO: {
            return {
                ...state,
                title: action.title,
                text: action.text,
                color: action.color,
                date: action.date
            };
        }
        default: {
            return state;
        }
    }
};