import { act, renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useCatalog } from '@/hooks/useCatalog';

const mockGetCatalog = vi.hoisted(() => vi.fn().mockResolvedValue([]));

vi.mock('../../services/CatalogService', () => ({
    default: {
        getCatalog: mockGetCatalog,
    },
}));

describe('useCatalog', () => {
    it('should start with loading=true', async () => {
      const { result } = renderHook(() => useCatalog());
      expect(result.current.loading).toBe(true);
    });

    it('should call the catalog service to fetch the catalog in the fetchCatalog function', async () => {
        const { result } = renderHook(() => useCatalog());

        result.current.fetchCatalog();
        expect(mockGetCatalog).toHaveBeenCalledTimes(1);
    });

    it('should set loading to false when the catalog is fetched', async () => {
        const { result } = renderHook(() => useCatalog());

        await act(async () => result.current.fetchCatalog());

        expect(result.current.loading).toBe(false);
    });

    it('should set an error when the catalog service throws an error', async () => {
        mockGetCatalog.mockRejectedValue(new Error('Error'));

        const { result } = renderHook(() => useCatalog());

        await act(async () => result.current.fetchCatalog());

        expect(result.current.error).toBe(true);
    });
});