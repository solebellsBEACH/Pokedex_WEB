export const Types = {
    HOME_BALL_REQUEST: 'HOME_BALL_REQUEST',
    HOME_BALL_SUCCESS: 'HOME_BALL_SUCCESS',
    HOME_BALL_FAIL: 'HOME_BALL_FAIL',
};

const INITIAL_STATE = {
    loading: false,
    error: false,
    data: null,
    success: false,
};

export default function Home(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.HOME_BALL_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.HOME_BALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                ball: action.payload
            };
        case Types.HOME_BALL_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export const Creators = {
    homeBallRequest: (payload: any) => ({
        type: Types.HOME_BALL_REQUEST,
        payload
    }),
    homeBallSuccess: (payload: any) => ({
        type: Types.HOME_BALL_SUCCESS,
        payload
    }),
    homeBallFail: () => ({
        type: Types.HOME_BALL_FAIL
    }),
};
