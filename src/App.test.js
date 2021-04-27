// import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

import React from "react";
// import { StateMock } from '@react-mock/state';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";

//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
test("contains heading 1", () => {
  render(<App />);

  expect(screen.getByRole("article")).toHaveTextContent("Heading 1");
});
test("renders a new heading 1 correctly", () => {
  render(<App />);
  // const originalPreview = screen.getByLabelText('previewer').toHaveTextContent("This is a paragraph This is bolded text Heading 1 Heading 2 choose a color here This is an inline <div></div> This is a block of code: let z = 'zahra'; let y = 'yael'; let f = z + y; strawberry mochi heart filled macaroons coconut water When you give up, your dreams and everything else, they’re gone. Hard work is worthless for those that don’t believe in themselves. – Uzumaki Naruto");
  // const previewer = screen.getByLabelText('previewer')
  const input = screen.getByLabelText("editor");

  fireEvent.change(input, { target: { value: "# Testing Another Heading 1" } });
  expect(screen.getByRole("article")).toHaveTextContent(
    "Testing Another Heading 1"
  );
});
test("does not render previous input of 'testing another heading 1'", () => {
  render(<App />);

  expect(screen.getByRole("article")).not.toHaveTextContent(
    "Testing Another Heading 1"
  );
});
//test img
test("image must have correct source url", () => {
  render(<App />);
  const img = screen.getByRole("img");
  const imageLink =
    "https://i.pinimg.com/564x/83/7c/c3/837cc3efb59ffe05d7b0ae7f3177151b.jpg";

  expect(img).toHaveAttribute("src", imageLink);
  expect(img).toHaveAttribute("alt", "Image");
});
//test blockquote
test("quote renders in a blockquote format", () => {
  const { container } = render(<App />);
  const quote = container.querySelector("blockquote");

  expect(quote).toHaveTextContent(
    "When you give up, your dreams and everything else, they’re gone. Hard work is worthless for those that don’t believe in themselves. – Uzumaki Naruto"
  );
});
//test link display
test("the hyperlink displays with correct text and link", () => {
  render(<App />);
  const link = "https://flatuicolors.com/palette/ca";

  expect(screen.getByText("choose a color here").closest("a")).toHaveAttribute(
    "href",
    link
  );
});
//text <li> elements
// test('displays correct amount of bullet points', () => {
//   render(<App />);
//   const expected = [
//     'strawberry mochi',
//     'heart filled macaroons',
//     'coconut water', 
//     'coconut water'];

//   expect(screen.getAllByRole('list')).toEqual(expect.arrayContaining(expected));

// })