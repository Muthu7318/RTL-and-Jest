import { getByRole, render, screen } from "@testing-library/react";
import QueryFn from "./QueryFn";
import { DataForm } from "./QueryFn";

test("how getby, queryby, findby finding 0 elements", async () => {
  render(<QueryFn></QueryFn>);
  //getByRole
  expect(() => screen.getByRole("textbox")).toThrow();
  //queryByRole
  expect(screen.queryByRole("textbox")).toEqual(null);
  //findByRole
  let errorThrown = false;
  try {
    await screen.findByRole("textbox");
  } catch (err) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
});

test("how getby, queryby, findby finding 1 elements", async () => {
  render(<QueryFn></QueryFn>);

  expect(screen.getByRole("list")).toBeInTheDocument();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByRole("list")).toBeInTheDocument();
  expect(await screen.findByRole("list")).toBeInTheDocument();
});

test("getAllBy, queryAllBy, findAllBy", async () => {
  render(<QueryFn></QueryFn>);

  expect(screen.getAllByRole("listitem")).toHaveLength(3);
  expect(screen.queryAllByRole("listitem")).toHaveLength(3);
  expect(await screen.findAllByRole("listitem")).toHaveLength(3);
});

test("selecting different elements", () => {
  render(<DataForm></DataForm>);

  const elements = [
    screen.getByRole("button"),
    screen.getByLabelText("Email"),
    screen.getByPlaceholderText("Red"),
    screen.getByText("Enter Data"),
    screen.getByDisplayValue("test@test.com"),
    screen.getByAltText("data"),
    screen.getByTitle("Click when ready to submit"),
    screen.getByTestId("image wrapper"),
  ];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }
});
