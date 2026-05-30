import { useSessionStore } from './session.store';

export const useIsAuth = () => useSessionStore((s) => s.isAuth);
export const useAuthStep = () => useSessionStore((s) => s.step);
export const useAuthEmail = () => useSessionStore((s) => s.email);

export const sessionActions = useSessionStore.getState().actions;