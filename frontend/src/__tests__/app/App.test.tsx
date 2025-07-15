import App from "@/App";
import { render, screen } from "../utils/test-utils";
import { describe, it, expect } from "vitest";

describe('App', () => {
    it('should render the catalog', async () => {
        render(<App />);

        expect(screen.getByTestId('loader')).toBeInTheDocument();

        setTimeout(() => {
            expect(screen.getByTestId('catalog')).toBeInTheDocument();
        }, 2500);
    });
});