// import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

import React from "react";
// import { StateMock } from '@react-mock/state';
import { render, screen, fireEvent, getByLabelText } from "@testing-library/react";

//snapshot
it("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });


//a test for entering text a certain way in the editor using markdown
//and that appearing in the previewer in the correct way

//click and type text in the editor

test('contains heading 1', () => {
  render(<App />);

    expect(screen.getByRole('article')).toHaveTextContent("Heading 1")
})

// test('renders heading 1 correctly', () => {
//   const { getByTestID } = render(<App />);
//   const input = screen.getByLabelText('editor');
//   const previewer = screen.getByLabelText('previewer')
  
//   fireEvent.change(input, { target: { value: '#Testing Another Heading 1'}});
//   expect(previewer.value).toBe('#Testing Another Heading 1');

//   // expect(screen.getByRole('article')).toHaveTextContent("Heading 1");

// })

test('renders heading 1 correctly', () => {
  const { getByTestID } = render(<App />);
  // const originalPreview = screen.getByLabelText('previewer').toHaveTextContent("This is a paragraph This is bolded text Heading 1 Heading 2 choose a color here This is an inline <div></div> This is a block of code: let z = 'zahra'; let y = 'yael'; let f = z + y; strawberry mochi heart filled macaroons coconut water When you give up, your dreams and everything else, they’re gone. Hard work is worthless for those that don’t believe in themselves. – Uzumaki Naruto");
  // const previewer = screen.getByLabelText('previewer')
  const input = screen.getByLabelText('editor');
  
  fireEvent.change(input, { target: { value: '# Testing Another Heading 1'}});
  expect(screen.getByRole('article')).toHaveTextContent('Testing Another Heading 1');

  // expect(screen.getByRole('article')).toHaveTextContent("Heading 1");

})