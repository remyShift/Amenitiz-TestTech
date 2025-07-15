import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Catalog from '@/components/Catalog';

const mockGetCatalog = vi.hoisted(() => vi.fn().mockResolvedValue([]));

vi.mock('../../services/CatalogService', () => ({
    default: {
        getCatalog: mockGetCatalog,
    },
}));

describe('Catalog', () => {
    beforeEach(() => {
        mockGetCatalog.mockClear();
    });

    it('should render the catalog', () => {
        render(<Catalog />);

        expect(screen.getByTestId('catalog')).toBeDefined();
    });

    it('should call the fetchCatalog function when the component is mounted and set loading to false when the catalog is fetched', async () => {
        render(<Catalog />);

        expect(screen.getByTestId('loading')).toBeDefined();

        await waitFor(() => {
            expect(mockGetCatalog).toHaveBeenCalledTimes(1);
        });

        await waitFor(() => {
            expect(screen.queryByTestId('loading')).toBeNull();
        });
    });
});