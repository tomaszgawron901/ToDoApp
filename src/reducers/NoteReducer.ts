import { dataActionTypes, viewActionTypes } from '../actions/types';
import NoteColors from '../constans/NoteColors';
import ViewReducer, { IViewsState } from './NoteViewReducer';
import DataReducer, {IDataState} from './NoteDataReducer';
import { combineReducers } from 'redux';

export interface INoteState {
    id: number;
    dataState: IDataState;
    viewState: IViewsState;
}

export default (state: INoteState[] = [], action: any): INoteState[] => {
    switch (action.type) {
        case dataActionTypes.ADD_TODO: {
            return [                {
                id: action.id,
                dataState: DataReducer(undefined, action),
                viewState: ViewReducer(undefined, action)
            },
                ...state
            ];
        }
        case dataActionTypes.UPDATE_TODO: {
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
        case dataActionTypes.DEL_TODO: {
            let stateAfter = [];
            state.forEach(note => {
                if (note.id !== action.id) {
                    stateAfter = [ ...stateAfter, note ];
                }
            });

            return stateAfter;
        }
        case dataActionTypes.SET_VIEW: {
            return state.map( note => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        viewState: ViewReducer(note.viewState, {type: action.viewType})
                    };
                }
                return note;
            });
        }
        default: {
            return state;
        }
    }
};