import Div from './Div';
import Link from './Link';

const Dropdown = ({value, onChange, onClick}) => {
    return (
        <Div className="d-flex align-items-center">
            <select class="w-100 me-3" value={value} onChange={onChange}>
                <option value="all" default>All</option>
                <option value="selected">Selected</option>
                <option value="in process">In Process</option>
                <option value="rejected">Rejected</option>
            </select>
            <Link className="w-auto" onClick={onClick}>Clear</Link>
        </Div>
    )
}

export default Dropdown;