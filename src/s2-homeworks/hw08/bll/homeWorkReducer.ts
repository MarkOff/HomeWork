import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    const copyState = [...state]
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            return copyState.sort((a,b) => action.payload === 'up'
                ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
                : a.name.toLowerCase() > b.name.toLowerCase() ?  -1 : 1
            ) // need to fix
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(e =>  e.age >= action.payload) // need to fix
        }
        default:
            return copyState
    }
}
