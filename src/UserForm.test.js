import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("userform shows two inputs and a button", () => {
  // render the component;
  render(<UserForm></UserForm>);
  // manipulate the component or find the element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  // assertion - make sure the component is doing what we expect it to do

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  //not the best implementation
  //   const argList = [];
  //   const callback = (...args) => {
  //     argList.push(args);
  //   };
  // try to render the component
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock}></UserForm>);
  // find the two inputs
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // simulate typing in a name

  user.click(nameInput);
  user.keyboard("muthu");

  // simulate typing in an email
  user.click(emailInput);
  user.keyboard("muthu@gmail.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("muthu", "muthu@gmail.com");
});

test("clear the inputs one clicking on submit", () => {
  render(<UserForm onUserAdd={() => {}}></UserForm>);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  user.click(nameInput);
  user.keyboard("muthu");

  // simulate typing in an email
  user.click(emailInput);
  user.keyboard("muthu@gmail.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.click(button);
  });
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
