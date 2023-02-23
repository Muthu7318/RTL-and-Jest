import { screen, render } from "@testing-library/react";
import AccessibleName from "./AccessibleName";

test("can select by accessible names", () => {
  render(<AccessibleName></AccessibleName>);

  const submitButton = screen.getByRole("button", {
    name: /submit/i,
  });
  const cancelButton = screen.getByRole("button", {
    name: /cancel/i,
  });

  expect(submitButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});

test("can select input tags by accessible names", () => {
  render(<AccessibleName></AccessibleName>);

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const searchInput = screen.getByRole("textbox", {
    name: /search/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});

test("button with svg", () => {
  render(<AccessibleName></AccessibleName>);

  const icon1Button = screen.getByRole("button", {
    name: "icon1",
  });
  const icon2Button = screen.getByRole("button", {
    name: "icon2",
  });

  expect(icon1Button).toBeInTheDocument();
  expect(icon2Button).toBeInTheDocument();
});
