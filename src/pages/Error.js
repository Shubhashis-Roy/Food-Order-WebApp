import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Opps !!! Something Went Worng</h2>
        <h2>
          {" "}
          {err.status} : {err.statusText}{" "}
        </h2>
      </div>
    </>
  );
};

export default Error;
