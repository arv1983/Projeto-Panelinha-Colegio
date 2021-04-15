import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../Register";

describe("When Register is ok", () => {
  test("Should error message apear", async () => {
    render(<Register></Register>);
    userEvent.type(screen.getByPlaceholderText("Name"), "");
    userEvent.type(screen.getByPlaceholderText("E-mail"), "");
    userEvent.type(screen.getByPlaceholderText("Password"), "");

    userEvent.click(screen.getByRole("button"));

    const message = await screen.findAllByText("Field Required");

    expect(message).toBeTruthy();
  });
});
