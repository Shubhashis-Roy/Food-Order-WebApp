import { createContext } from "react";

const UserContext = createContext({
  loggInUser: "Default User",
});

export default UserContext;
