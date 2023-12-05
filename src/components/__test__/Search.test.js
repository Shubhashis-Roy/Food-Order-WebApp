import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

// // ## When call an Fetch() API
// import { act } from "react-dom/test-utils";
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// test("Should render the Body Comp with Search Comp", async () => {
//   await act(async () => render(<Body />));
// });

test("Should Search ResList for pizza text input", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const cartBeforeSearch = screen.getAllByTestId("resCart");
  expect(cartBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchButton);

  const cartAfterSearch = screen.getAllByTestId("resCart");
  expect(cartAfterSearch.length).toBe(2);
});

test("Should Fliter Top Rated Restaurant", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const rateButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(rateButton);

  const AfterClick = screen.getAllByTestId("resCart");
  expect(AfterClick.length).toBe(7);
});

test("Should Filter Pure Veg Restaurant", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const PureVegButton = screen.getByRole("button", { name: "Pure Veg" });

  fireEvent.click(PureVegButton);
  const resCart = screen.getAllByTestId("resCart");
  expect(resCart.length).toBe(10);
});
