import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Testing authReducer', () => {
    test('should return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('should return state with user and logged true', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Mike'
            }
        };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, user: { name: 'Mike' } });
    })

    test('should return state with logged false', () => {
        const action = {
            type: types.logout
        };
        const state = authReducer({ logged: true, user: { name: 'Mike' } }, action);
        expect(state).toEqual({ logged: false });
    })
})