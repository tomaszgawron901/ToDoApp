import * as actionTypes from '../actions/types/note';
import NoteColors from '../constans/NoteColors';
import ViewReducer, { IViewsState } from './NoteViewReducer';
import DataReducer, {IDataState} from './NoteDataReducer';

export interface INoteState {
    id: number;
    dataState: IDataState;
    viewState: IViewsState;
}

export const Notes = (state: INoteState[] = [], action: any): INoteState[] => {
    switch (action.type) {
        case actionTypes.ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    dataState: DataReducer(undefined, action),
                    viewState: ViewReducer(undefined, action)

                }

            ];
        }
        case actionTypes.UPDATE_TODO: {
            return state.map( note => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        dataState: DataReducer(note.dataState, action)
                    };
                }
                return note;
            });
        }
        case actionTypes.DEL_TODO: {
            const index: number = state.indexOf(action.id, 0);
            if (index !== -1) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        default: {
            return state;
        }
    }
};