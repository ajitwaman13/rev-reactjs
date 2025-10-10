import { screen, render } from "@testing-library/react";

import Footer from "../components/Footer";
import { expect, test } from "vitest";

test("test the footer componet ", () => {
  render(<Footer />);
});
