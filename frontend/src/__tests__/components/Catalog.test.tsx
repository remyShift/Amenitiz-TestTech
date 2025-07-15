import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
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

    it('should render the catalog', async () => {
        render(<Catalog />);

        expect(screen.getByTestId('loader')).toBeInTheDocument();

        setTimeout(() => {
            expect(screen.getByTestId('catalog')).toBeInTheDocument();
        }, 2500);
    });

    it('should have a loader displayed when the component is mounted', async () => {
        render(<Catalog />);

        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('should call the fetchCatalog function when the component is mounted', async () => {
        render(<Catalog />);

        await waitFor(() => {
            expect(mockGetCatalog).toHaveBeenCalledTimes(1);
        });
    });

    it('should set loading to false when the catalog is fetched', async () => {
        render(<Catalog />);

        setTimeout(() => {
            expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
            expect(screen.getByTestId('catalog')).toBeInTheDocument();
        }, 2500);
    });

    it('should display an error message when the catalog service throws an error', async () => {
        mockGetCatalog.mockRejectedValue(new Error('Error'));

        render(<Catalog />);

        setTimeout(() => {
            expect(screen.getByTestId('error-message')).toBeInTheDocument();
        }, 2500);
    });

    it('should display the cards with the catalog items when the catalog is fetched without error', async () => {
        mockGetCatalog.mockResolvedValue([{ id: 1, code: 'CF1', name: 'Coffee', price: 11.23 }]);

        render(<Catalog />);

        setTimeout(() => {
            const countCatalogCards = screen.getAllByTestId('catalog-card').length;
            expect(countCatalogCards).toBe(1);
        }, 2500);
    });
});