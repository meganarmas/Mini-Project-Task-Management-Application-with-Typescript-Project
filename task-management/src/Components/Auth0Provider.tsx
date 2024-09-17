import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNaviProps = {
    children: any;
};

const Auth0ProviderWithNavi: React.FC<Auth0ProviderWithNaviProps> = ({
    children,
}) => {
    const navigate = useNavigate();
    const domain = "dev-7uit57vvq5za5npa.us.auth0.com";
    const clientId = "rcHdPQz8KvE6jMP6FLKy5sn9WSa58y7D";
    const redirectUri = "http://localhost:3000/callback";

    const onRedirectCallback = (appState: any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    if(!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: redirectUri,
            scope: 'openid profile email',
        }}
        onRedirectCallback={onRedirectCallback}
        cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavi;