import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
    <title>Error</title>
</Helmet>
            <h2 className="text-center text-4xl">Error Founding the page</h2>
            <p>Please go back</p>
            <Link to='/'><button className="btn">Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;