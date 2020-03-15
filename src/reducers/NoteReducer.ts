import { dataActionTypes} from '../actions/types';
import NoteColors from '../constans/NoteColors';
import DataReducer, {IDataState} from './NoteDataReducer';
import { combineReducers } from 'redux';

export interface InotesByID {
    [index: number]: IDataState;
}

export interface INoteAppState {
    notesID: number[]
    notesByID: InotesByID
}

const notesIDReducer = (state: number[] = [], action: any): number[] => {
    switch (action.type) {
        case dataActionTypes.ADD_TODO: {
            return [
                action.id,
                ...state
            ];
        }
        case dataActionTypes.UPDATE_TODO: {
            return [...state];
        }
        case dataActionTypes.DEL_TODO: {
            let stateAfter = [];
            state.forEach(id => {
                if (id !== action.id) {
                    stateAfter = [ ...stateAfter, id ];
                }
            });
            return stateAfter;
        }
        default: {
            return state;
        }
 }
};

const notesByIDReducer = (state: InotesByID = [], action: any): InotesByID => {
    switch (action.type) {
        case dataActionTypes.ADD_TODO: {
            let nextState: InotesByID = Object.assign( {}, state );
            nextState[action.id] = DataReducer( undefined, action );
            return nextState;
        }
        case dataActionTypes.UPDATE_TODO: {
            let nextState: InotesByID = Object.assign( {}, state);
            nextState[action.id] = DataReducer( state[action.id], action );
            return nextState;
        }
        case dataActionTypes.DEL_TODO: {
            let nextState: InotesByID = Object.assign( {}, state);
            delete nextState[action.id];
            return nextState;

        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    notesID: notesIDReducer,
    notesByID: notesByIDReducer
});