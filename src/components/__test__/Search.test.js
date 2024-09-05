import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../body";
import { act } from "react";
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should render the body component with seach",async()=>{

    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
        
    })

    const searchBtn = screen.getByRole("button",{name:"Search"})

    expect(searchBtn).toBeInTheDocument();

    render(<Body />)
})

// it('should filter top rated restaurant',async()=>{
//     await act(async()=>{
//         render(
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         );

//         const cardBeforeFilter = screen.getAllByTestId("resCard")
//         console.log(cardBeforeFilter)
//         expecr(cardBeforeFilter.length).toBe(20);


//         const topRated = screen.getByRole("button",{name:"Top Rated Restaurants"});

//         fireEvent.click(topRated)

//         // const
//     })
// })