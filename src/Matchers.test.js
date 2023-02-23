import { screen, render, within } from "@testing-library/react";
import Matchers from "./Matchers";

test("the form displays two bttons", () => {
  render(<Matchers></Matchers>);

  // const button = within(screen.getByRole("form")).getAllByRole("button");

  // expect(button).toHaveLength(2);
  const form = screen.getByRole("form");

  expect(form).toContainRole("button", 2);
});

function toContainRole(container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
    };
  }
  return {
    pass: false,
    message: () =>
      `Expect to find ${quantity} ${role} elements. Found ${elements.length} instead`,
  };
}
expect.extend({ toContainRole });
