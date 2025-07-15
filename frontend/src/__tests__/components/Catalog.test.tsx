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

        await waitFor(() => {
            expect(screen.getByTestId('catalog')).toBeInTheDocument();
        });
    });

    it('should call the fetchCatalog function when the component is mounted and set loading to false when the catalog is fetched', async () => {
        render(<Catalog />);

        expect(screen.getByTestId('loading')).toBeInTheDocument();

        await waitFor(() => {
            expect(mockGetCatalog).toHaveBeenCalledTimes(1);
        });

        await waitFor(() => {
            expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
            expect(screen.getByTestId('catalog')).toBeInTheDocument();
        });
    });

    it('should display an error message when the catalog service throws an error', async () => {
        mockGetCatalog.mockRejectedValue(new Error('Error'));

        render(<Catalog />);

        await waitFor(() => {
            expect(screen.getByTestId('error')).toBeInTheDocument();
        });
    });

    it('should display the cards with the catalog items when the catalog is fetched without error', async () => {
        mockGetCatalog.mockResolvedValue([{ id: 1, code: '123', name: 'Coffee', price: 10 }]);

        render(<Catalog />);

        await waitFor(() => {
            const countCatalogCards = screen.getAllByTestId('catalog-card').length;
            expect(screen.getByText('123 | Coffee | 10')).toBeInTheDocument();
            expect(countCatalogCards).toBe(1);
        });
    });
});