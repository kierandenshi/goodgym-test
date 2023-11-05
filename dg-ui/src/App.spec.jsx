import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  const component = render(<App />);

  it("should match the component snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
