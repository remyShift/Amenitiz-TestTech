import { renderHook, waitFor } from '../utils/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useCatalog } from '@/hooks/useCatalog';

const mockGetCatalog = vi.hoisted(() => vi.fn().mockResolvedValue([]));

vi.mock('../../services/CatalogService', () => ({
    default: {
        getCatalog: mockGetCatalog,
    },
}));

describe('useCatalog', () => {
    beforeEach(() => {
        mockGetCatalog.mockClear();
    });

    it('should start with loading=true', () => {
        const { result } = renderHook(() => useCatalog());
        expect(result.current.isLoading).toBe(true);
    });

    it('should call the catalog service to fetch the catalog automatically', async () => {
        renderHook(() => useCatalog());

        await waitFor(() => {
            expect(mockGetCatalog).toHaveBeenCalledTimes(1);
        });
    });

    it('should set loading to false when the catalog is fetched', async () => {
        const { result } = renderHook(() => useCatalog());

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });
    });

    it('should set an error when the catalog service throws an error and loading to false', async () => {
        const error = new Error('Error');
        mockGetCatalog.mockRejectedValue(error);

        const { result } = renderHook(() => useCatalog());

        await waitFor(() => {
            expect(result.current.error).toBe(error);
            expect(result.current.isLoading).toBe(false);
        });
    });

    it('should set the catalog when the catalog is fetched without error', async () => {
        mockGetCatalog.mockResolvedValue([{ id: 1, name: 'Coffee', price: 10 }]);

        const { result } = renderHook(() => useCatalog());

        await waitFor(() => {
            expect(result.current.data).toEqual([{ id: 1, name: 'Coffee', price: 10 }]);
            expect(result.current.isLoading).toBe(false);
        });
    });
});