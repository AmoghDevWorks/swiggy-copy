import Heading from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should load header component with header button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Heading />
            </Provider>
        </BrowserRouter> 
    );

    const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("LOGIN")

    expect(loginBtn).toBeInTheDocument();
});

it("should render header with cart items zero",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Heading />
            </Provider>
        </BrowserRouter> 
    );

    const cardItems = screen.getByText("CART(0)");

    expect(cardItems).toBeInTheDocument();
})

it("should change from login to logout onClick",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Heading />
            </Provider>
        </BrowserRouter> 
    );

    const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("LOGIN")

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button");


    expect(logoutBtn).toBeInTheDocument();
})