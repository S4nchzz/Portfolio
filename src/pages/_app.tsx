import Nav from "../UI/components/nav/Nav"
import "../UI/styles/global.css"

export default function _app({ Component, pageProps }) {
    return (
        <>
            <Nav/>
            <Component {...pageProps}/>
        </>
    )
};