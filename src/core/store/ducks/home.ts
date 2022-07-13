export const Types = {
    HOME_POKEMONS_REQUEST: 'HOME_POKEMONS_REQUEST',
    HOME_POKEMONS_SUCCESS: 'HOME_POKEMONS_SUCCESS',
    HOME_POKEMONS_FAIL: 'HOME_POKEMONS_FAIL',
};

const INITIAL_STATE = {
    loading: false,
    error: false,
    pokemons: null,
    success: false,
};

export default function Home(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.HOME_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.HOME_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                pokemons: action.payload
            };
        case Types.HOME_POKEMONS_FAIL:
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
    homePokemonsRequest: (payload: any) => ({
        type: Types.HOME_POKEMONS_REQUEST,
        payload
    }),
    homePokemonsSuccess: (payload: any) => ({
        type: Types.HOME_POKEMONS_SUCCESS,
        payload
    }),
    homePokemonsFail: () => ({
        type: Types.HOME_POKEMONS_FAIL
    }),
};
