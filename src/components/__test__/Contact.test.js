import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import "@testing-library/jest-dom";

describe("Contect Us page Test Case", () => {
  //     // ### This are Helper fn, Used to do something Clean up task
  //     beforeAll(() => {
  //       console.log("Before All");
  //     });

  //     beforeEach(() => {
  //       console.log("Before Each");
  //     });

  //     afterAll(() => {
  //       console.log("After All");
  //     });

  //     afterEach(() => {
  //       console.log("After Each");
  //     });

  // it/test both is same
  test("Should load contact us component", () => {
    // Render the component
    render(<Contact />);

    // Query to find
    const heading = screen.getByRole("heading");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    //   Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load placeholder inside contact component", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("name");
    expect(placeholder).toBeInTheDocument();
  });

  test("Should load placeholder inside contact component", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
  });
});
