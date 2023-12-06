import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteMatch();
    console.log(error);
    return (
        <div>
            <h1>Error 404</h1>
            <p>{error.data}</p>
        </div>
    );
}