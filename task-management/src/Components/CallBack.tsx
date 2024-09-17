import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";

const CallBackPage: React.FC = () => {
    const {error} = useAuth0();

    if (error) {
        return<div>Oh no! {error.message}</div>;
    }

    return(
        <PageLayout>
            <h1>Call Back</h1>
        </PageLayout>
    );
};

export default CallBackPage;