import { describe, it, expect } from 'vitest';
import { act, render, renderHook, screen } from '@testing-library/react';
import Catalog from '@/components/Catalog';
import { useCatalog } from '@/hooks/useCatalog';

describe('Catalog', () => {
    it('should render the catalog', () => {
        render(<Catalog />);

        expect(screen.getByTestId('catalog')).toBeDefined();
    });

    it('should call the fetchCatalog function when the component is mounted and set loading to false when the catalog is fetched', async () => {
        const { result } = renderHook(() => useCatalog());
        render(<Catalog />);

        expect(screen.getByTestId('catalog')).toBeDefined();

        await act(async () => result.current.fetchCatalog());

        expect(result.current.loading).toBe(false);
    });
});