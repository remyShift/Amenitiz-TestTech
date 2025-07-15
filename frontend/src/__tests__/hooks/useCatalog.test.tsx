import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCatalog } from '@/hooks/useCatalog';

describe('useCatalog', () => {
    it('should start with loading=true', async () => {
      const { result } = renderHook(() => useCatalog());
      expect(result.current.loading).toBe(true);
    });
  }
);