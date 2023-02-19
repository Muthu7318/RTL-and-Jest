import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", () => {
  render(<App></App>);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("muthu");
  user.click(emailInput);
  user.keyboard("muthu@gmail.com");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.click(button);
  });

  // eslint-disable-next-line
  screen.debug();

  const name = screen.getByRole("cell", {
    name: "muthu",
  });
  const email = screen.getByRole("cell", {
    name: "muthu@gmail.com",
  });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
