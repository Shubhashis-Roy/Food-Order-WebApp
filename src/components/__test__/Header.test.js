import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utills/appStore";
import { BrowserRouter } from "react-router-dom";

// test("Should render Header Componentment with a login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   //   const loginButton = screen.getByRole("button");
//   //   const loginButton = screen.getByRole("button", { name: "Login" });
//   // const loginButton = screen.getByText("Login");
//   expect(loginButton).toBeInTheDocument();
// });

test("Should render Header Componentment with a cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  //   const cartItems = screen.getByText("Cart (0)");
  expect(cartItems).toBeInTheDocument();
});

test("Should change Logut Button to Login Button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
