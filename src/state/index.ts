import { useState, useEffect, useCallback } from 'react'
import constate from 'constate'


const initialState = {
    user: {
        id: 0,
        name: ''
    }
}

type StateType = typeof initialState

function useContext() {
    const [state, setState] = useState(initialState)

    const setValue = useCallback((val: Partial<StateType>) => setState(prev => ({ ...prev, ...val })), [])

    // const setUser = useCallback((id: number, name: string) => setState(prev => ({ ...prev, user: { id, name } })), [])

    return { state, setValue }
}

const [ContextProvider, useStates, useSetValue] = constate(useContext, val => val.state, val => val.setValue)

export { ContextProvider, useStates, useSetValue }