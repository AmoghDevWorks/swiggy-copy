import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"

test("should load contact us component",()=>{
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("should load button",()=>{
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test("Loaded 2 input boxes",()=>{
    render(<ContactUs />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
})