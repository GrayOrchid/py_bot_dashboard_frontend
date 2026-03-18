import { useEffect } from 'react';

export const useHotkeys = (actions: { key: string; ref: React.RefObject<HTMLButtonElement | null> }[], active: boolean = true) => {
    useEffect(() => {
        if (!active) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            actions.forEach(({ key, ref }) => {
                if (e.key === key && ref.current && !ref.current.disabled) {
                    e.preventDefault();
                    ref.current.click();
                }
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [actions, active]);
};