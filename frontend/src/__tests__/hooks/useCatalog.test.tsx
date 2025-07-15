import { renderHook } from '@testing-library/react';
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
  }
);