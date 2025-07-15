import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions, renderHook, type RenderHookOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

const createTestQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            gcTime: 0,
            staleTime: 0,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
        },
        mutations: {
            retry: false,
        },
    },
});

const AllTheProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = createTestQueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: AllTheProviders, ...options });

    const customRenderHook = <Result, Props>(
    hook: (initialProps: Props) => Result,
    options?: RenderHookOptions<Props>
) => renderHook(hook, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, customRenderHook as renderHook }; 