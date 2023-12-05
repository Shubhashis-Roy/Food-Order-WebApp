import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import RestaurantManu from "../../pages/RestaurantManu";
import MOCK_DATA from "../mocks/resManuData.json";
import { Provider } from "react-redux";
import appStore from "../../utills/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../../pages/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load the restaurant manu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantManu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordingHeader = screen.getByText("Recommended (30)");
  fireEvent.click(accordingHeader);

  const resItem = screen.getAllByTestId("foodItems");
  expect(resItem.length).toBe(30);
});

test("Should update the cart after click add button ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantManu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordingHeader = screen.getByText("Recommended (30)");
  fireEvent.click(accordingHeader);

  const addBtn = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[0]);

  // Checking update the Cart in the header after click Add+ button
  const cart_1 = screen.getByText("Cart (1)");
  expect(cart_1).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  const cartItem = screen.getAllByTestId("foodItems");
  expect(cartItem.length).toBe(32);

  // Clear Cart Button click
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  const cartText = screen.getByText("Cart is empty Add Item");
  expect(cartText).toBeInTheDocument();
});
