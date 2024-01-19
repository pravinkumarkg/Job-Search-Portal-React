import Button from './Button';
import Div from './Div';

const Sidebar = () => {
    return (
        <Div className="sidebar-wrapper bg-blue text-white text-center d-flex align-items-center justify-content-between flex-column">
            <Div>
                <Div className="mb-5">
                    <span class="material-icons-outlined">menu</span>
                </Div>
                <Div className="mb-5">
                    <span class="material-icons-outlined">grid_view</span>
                    <p class="mb-0 fw-500">Dashboard</p>
                </Div>
                <Div className="mb-5">
                    <span class="material-icons-outlined">work_outline</span>
                    <p class="mb-0 fw-500">My Jobs</p>
                </Div>
                <Div className="mb-5">
                    <span class="material-icons-outlined">chat_bubble_outline</span>
                    <p class="mb-0 fw-500">Messages</p>
                </Div>
                <Div className="mb-5">
                    <span class="material-icons-outlined">calendar_today</span>
                    <p class="mb-0 fw-500">Upcoming Events</p>
                </Div>
            </Div>

            <Div>
                <Button buttonStyleType="primary" className="mb-5 border-0 py-1 px-3 fw-500">Help</Button>
                <Div>
                    <span class="material-icons-outlined">logout</span>
                    <p class="mb-0 fw-500">Log Out</p>
                </Div>
            </Div>
        </Div>
    )
}

export default Sidebar;