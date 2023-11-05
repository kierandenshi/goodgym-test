import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal test", () => {
  const message = "Super test message";
  const closeModal = () => null;
  const component = render(<Modal message={message} closeModal={closeModal} />);

  it("should show the goodgymer's initials", () => {
    expect(screen.getByText(/Super test message/i)).toBeDefined();
  });

  it("should match the component snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
