import Image from './Image';
import Div from './Div';
import Button from './Button';
import LogoImage from '../images/aviate-logo.png';
import ProfileImage from '../images/profile.png'
import Search from './Search';

const Header = ({onChange, searchValue}) => {
    return (
        <>
            <Div className="container-fluid px-0">
                <Div className="header-wrapper bg-blue p-3 d-grid">
                    <Div className="logo-image-wrapper">
                        <a href="/">
                            <Image imagePath={LogoImage} imageAlt="logo-image" />
                        </a>
                    </Div>
                    <Search onChange={onChange} Value={searchValue} />
                    <Div className="d-flex align-items-center justify-content-center">
                        <span class="material-icons-outlined text-white me-4">chat_bubble_outline</span>
                        <span class="material-icons-outlined text-white me-4">notifications</span>
                        <span class="material-icons-outlined text-white">workspace_premium</span>             
                    </Div>
                    <Div className="profile-image-wrapper d-flex align-items-center justify-content-center">
                        <Image imagePath={ProfileImage} imageAlt="profile-image" />
                        <Div className="ps-2 text-center">
                            <p class="mb-1 text-white">Pravin Parker</p>
                            <Button buttonStyleType="primary" className="border-0">Edit my profile</Button>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    )
}

export default Header;