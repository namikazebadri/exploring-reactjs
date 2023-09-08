import Menu from "./Menu.jsx";

function Page({children}) {
    return <div>
        <h2><strong>Page</strong> Component</h2>
        <Menu title="Menubar" />
        {children}
    </div>
}

export default Page;