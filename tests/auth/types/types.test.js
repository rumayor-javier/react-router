import { types } from "../../../src/auth/types/types"

describe('Testing Types', () => {
    test('should return correct starting types', () => {
        expect(types).toEqual({ login: '[Auth] Login', logout: '[Auth] Logout' });
    })
})