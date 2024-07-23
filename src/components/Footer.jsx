import { getYear } from '../utilities/utilities';
import DanLogo from '/DanLogo-x1024.png';

const Footer = () => (
    <footer>
        <p>
            <img
                src={DanLogo}
                alt="Logo for Dan J Blain"
                /> &copy; {getYear()} Dan J Blain
        </p>
    </footer>
)

export default Footer