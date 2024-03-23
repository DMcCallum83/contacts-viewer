import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  test("renders a header", () => {
    render(<Header />);
    expect(screen.getByText("Contacts Viewer")).toBeDefined();
  });
});
