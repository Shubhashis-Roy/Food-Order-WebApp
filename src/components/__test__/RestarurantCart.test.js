import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import cartMockData from "../mocks/resMockCard.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

test("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={cartMockData} />);

  const name = screen.getByText("Veg Aroma");

  expect(name).toBeInTheDocument();
});

test("Should render RestaurantCard component with props Data", () => {
  // Higher order component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={cartMockData} />);

  const name = screen.getByText("Pure Veg");
  expect(name).toBeInTheDocument();
});
