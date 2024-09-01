import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();

    return(
        <div className="m-6">
            <h1 className="font-bold">Error:{err.status} found</h1>
            <h2>{err.data}</h2>
            {console.log(err)}
        </div>
    )
}

export default Error;