import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Catalog from '@/components/Catalog';

describe('Catalog', () => {
    it('should render the catalog', () => {
        render(<Catalog />);

        expect(screen.getByTestId('catalog')).toBeDefined();
    });
});