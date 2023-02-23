import { screen, render } from "@testing-library/react";
import User from "@testing-library/user-event";
import RoleExample from "./RoleExample";

test("can find element by role", () => {
  render(<RoleExample></RoleExample>);

  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "listitem",
    "list",
  ];

  for (let role of roles) {
    const el = screen.getByRole(role);
    expect(el).toBeInTheDocument();
  }
});
