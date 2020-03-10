import * as actionTypes from '../actions/types/view';

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
        case actionTypes.CHANGE_VIEW: {
            return {
                isClosed: !action.isClosed
            };
        }
        case actionTypes.SET_CLOSED: {
            return {
                isClosed: true
            };
        }
        case actionTypes.SET_OPENED: {
            return {
                isClosed: false
            };
        }
        default: {
            return state;
        }
    }
};