import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Layout = (props) => (
    <div className={"container"}>
        <ul>
            <li>
                <Link href="/">
                    <a>No SSR</a>
                </Link>
            </li>
            <li>
                <Link href="/ssr">
                    <a>SSR</a>
                </Link>
            </li>
        </ul>
        {props.children}
    </div>
);

export default Layout;
