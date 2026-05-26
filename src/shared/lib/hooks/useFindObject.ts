import { useMemo } from 'react';

export const useFindObject = <T,>(
    list: T[] | undefined | null,
    value: any,
    key?: keyof T
): T | null => {
    return useMemo(() => {
        if (!list) return null;
        return list.find(i => key ? i[key] === value : i === value) ?? null;
    }, [list, value, key]);
};