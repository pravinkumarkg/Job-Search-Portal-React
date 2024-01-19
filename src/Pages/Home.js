import React, { useState } from 'react';
import Div from '../Components/Div';
import Sidebar from '../Components/Sidebar';
import Image from '../Components/Image';
import Badges from '../Components/Badges';
import Heading from '../Components/Heading';
import Paragraph from '../Components/Paragraph';
import JobData from '../utils/data.json';
import Dropdown from '../Components/Dropdown';
import Header from '../Components/Header';

const HomePage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const deafultSelectOption = 'all';

    const handleDropdownOption = (event) => {
        const optionValue = event.target.value;
        setSelectedOption(optionValue);
    }

    const handleClearOption = () => {
        setSelectedOption(deafultSelectOption);
    }

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
    }

    return (
        <>
            <Header searchValue={searchTerm} onChange={handleSearch} />
            <Div className="d-flex mh-100">
                <Sidebar />
                <Div className="w-100 p-5">
                    <Div className="d-flex justify-content-between mb-3">
                        <Heading level={1}>Dashboard</Heading>
                        <Div>
                            <Heading level={4}>Job search status</Heading>
                            <Dropdown value={selectedOption} onChange={handleDropdownOption} onClick={handleClearOption} />
                        </Div>
                    </Div>
                    <Div className="card-wrapper p-4 bg-white rounded-4">
                        <Div className="d-flex align-items-center justify-content-between mb-3">
                            <Heading level={3} class="mb-0">Applications</Heading>
                        </Div>
                        
                        {JobData.map((data, index) => (
                            <>
                                {(selectedOption === data.status || selectedOption === "all" || selectedOption === null) && 
                                    (searchTerm === '' || data.title.toLowerCase().includes(searchTerm.toLowerCase())) && (
                                    <Div className="d-flex justify-content-between align-items-center card-wrapper p-4 bg-white rounded-4 mb-4" Id={`job-${index}`}>
                                        <Div className="d-flex">
                                            <Div>
                                                <Image imagePath={require(`../images/${data.image}`)} imageAlt="job-image" Width={90} Height={90} />
                                            </Div>
                                            <Div className="ms-4">
                                                <Heading level={5} class="job-role">{data.title}</Heading>
                                                <Paragraph className="mb-1">{data.company}</Paragraph>
                                                <Heading level={5} class="fs-15">{data.location}</Heading>
                                            </Div>
                                        </Div>
                                        <Div className="text-center">
                                            <Paragraph className="mb-1 fw-500">{data.salary}</Paragraph>
                                            <Paragraph className="fw-500 fs-12 mb-0">Per Month</Paragraph>
                                        </Div>
                                        <Div>
                                            <Badges className="text-capitalize" color={`${data.status === 'rejected' ? '#FFAAAA' : data.status === 'in process' ? '#FFD600' : '#1de66e'}`}>{data.status}</Badges>
                                        </Div>
                                    </Div>
                                )}
                            </>
                        ))}

                        {JobData.every((data) => 
                            !(selectedOption === data.status || selectedOption === "all" || selectedOption === null) ||
                            (searchTerm !== '' && !data.title.toLowerCase().includes(searchTerm.toLowerCase()))) && (
                            <Div className="text-center fw-500">
                               <Heading level={5}>No result found</Heading>
                            </Div>
                        )}
                    </Div>
                </Div>
            </Div>
        </>
    )
}

export default HomePage;