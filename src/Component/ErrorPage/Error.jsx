import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-96">
            <Helmet> <title>Error</title></Helmet>
        <h1 className="text-6xl mb-4 font-bold">Error 404 - Page Not Found</h1>
<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/">Go Back to Home Page</Link>
                </div>
    );
};

export default Error;