import App from "@/App";
import { render, screen, waitFor } from "../utils/test-utils";
import { describe, it, expect } from "vitest";

describe('App', () => {
    it('should render the catalog', async () => {
        render(<App />);

        await waitFor(() => {
            expect(screen.getByTestId('catalog')).toBeInTheDocument();
        });
    });
});