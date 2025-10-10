import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { test } from "vitest";

test("login componet check ..", () => {
  render(<Login />);
});
