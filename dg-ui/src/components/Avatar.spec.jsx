import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar test", () => {
  const goodgymer = {
    id: "123",
    first_name: "Kilgore",
    last_name: "Trout",
  };
  const component = render(<Avatar key={goodgymer.id} goodgymer={goodgymer} />);

  it("should show the goodgymer's initials", () => {
    expect(screen.getByText(/KT/i)).toBeDefined();
  });

  it("should match the component snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
