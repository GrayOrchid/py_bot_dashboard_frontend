import { useSessionStore } from './model/session.store';

export { useSessionStore };
export { sessionActions } from './model/session.actions';

export const useIsAuth = () => useSessionStore((s) => s.isAuth);
export const useSessionLoading = () => useSessionStore((s) => s.isLoading);
export const useUser = () => useSessionStore((s) => s.user);

export type { SessionState } from './model/types';