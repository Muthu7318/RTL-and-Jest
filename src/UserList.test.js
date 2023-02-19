import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    {
      name: "muthu",
      email: "muthu@gmail.com",
    },
    {
      name: "kumar",
      email: "kumar@gmail.com",
    },
  ];
  const { container } = render(<UserList users={users}></UserList>);
  return {
    users,
    container,
  };
}

test("render one row per user", () => {
  //render the component
  const { container } = renderComponent();

  // find all the rows in the table
  //   screen.logTestingPlaygroundURL();

  //   const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");
  console.log("testing", rows);

  // Assertion:correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
