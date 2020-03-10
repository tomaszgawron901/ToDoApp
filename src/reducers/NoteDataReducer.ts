import * as actionTypes from '../actions/types/note';
import NoteColors from '../constans/NoteColors';

export interface IDataState {
    title: string;
    text: string;
    color: NoteColors;
    date: Date;
}

export default (state: IDataState, action: any): IDataState => {
    switch (action.type) {
        case actionTypes.ADD_TODO: {
            return {
                title: '',
                text: '',
                color: NoteColors.white,
                date: action.date
            };
        }
        case actionTypes.UPDATE_TODO: {
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