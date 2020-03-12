import { viewActionTypes } from '../actions/types';

export interface IViewsState {
    isClosed: boolean;
}

const defaultState = (): IViewsState => (
    {
        isClosed: true
    }
);

export default (state = defaultState(), action: any): IViewsState => {
    switch (action.type) {
        case viewActionTypes.INVERSE_VIEW: {
            return {
                isClosed: !state.isClosed
            };
        }
        case viewActionTypes.SET_CLOSED: {
            return {
                isClosed: true
            };
        }
        case viewActionTypes.SET_OPENED: {
            return {
                isClosed: false
            };
        }
        default: {
            return state;
        }
    }
};