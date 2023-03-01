import { MenuBar } from "../menus/MenuBar";
//Component Specific styles
import './Header.css'
//style object
const styleObj = {
    color: 'red',
    backgroundColor: 'yellow',
    border: "thick solid #0000FF"
}
export const Heading = () => <div>
    <MenuBar />
    <h1 className="text-color">IBM</h1>
    <h1 style={styleObj}>IBM</h1>
</div>