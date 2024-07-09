import React, { useEffect, useState } from 'react';
import './css/whoweare.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ApiUrl } from './API/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Whoweare = () => {
    const [activeTab, setActiveTab] = useState('bishop4');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        axios.get(`${ApiUrl}/get/messages/3`)
            .then((response) => {
                setLoading(false);
                if (response.data.success && response.data.data.length > 0) {
                    setMessage(response.data.data[0].content);
                } else {
                    setNoData(true);
                }
            })
            .catch((error) => {
                console.error('Error fetching message:', error);
                setLoading(false);
                setNoData(true);
            });
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="vh-section-outer mt-5 section-bg" id="whoweare" style={{ backgroundImage: 'url("images/all-img/download.svg")' }}>
                <div className="section-inner">
                    <div className="container">
                        <div className="section-heading">
                            <h2 className="entry-title text-white mt-5">Who We Are</h2>
                        </div>
                        <div className="row">
                            <div className="tabSection">
                                <ul className="nav nav-pills" role="tablist">
                                    <li role="presentation" className={`category-link ${activeTab === 'bishop4' ? 'active' : ''}`}>
                                        <a
                                            href="/"
                                            onClick={() => handleTabClick('bishop4')}
                                            data-bs-target="#bishop4"
                                            aria-controls="bishop4"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <p className="hidden-xs">Bishop Profile</p>
                                        </a>
                                    </li>
                                    <li role="presentation" className={`category-link ${activeTab === 'message3' ? 'active' : ''}`}>
                                        <a
                                            href="/"
                                            onClick={() => handleTabClick('message3')}
                                            data-bs-target="#message3"
                                            aria-controls="message3"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <p className="hidden-xs">Bishop Message</p>
                                        </a>
                                    </li>
                                    <li role="presentation" className={`category-link ${activeTab === 'history1' ? 'active' : ''}`}>
                                        <a
                                            href="/"
                                            onClick={() => handleTabClick('history1')}
                                            data-bs-target="#history1"
                                            aria-controls="history1"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <p className="hidden-xs text-black">History</p>
                                        </a>
                                    </li>
                                    <li role="presentation" className={`category-link ${activeTab === 'mission2' ? 'active' : ''}`}>
                                        <a
                                            href="/"
                                            onClick={() => handleTabClick('mission2')}
                                            data-bs-target="#mission2"
                                            aria-controls="mission2"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <p className="hidden-xs text-black">Our Motto</p>
                                        </a>
                                    </li>
                                    <li role="presentation" className={`category-link ${activeTab === 'vision3' ? 'active' : ''}`}>
                                        <a
                                            href="/"
                                            onClick={() => handleTabClick('vision3')}
                                            data-bs-target="#vision3"
                                            aria-controls="vision3"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <p className="hidden-xs text-black">Vision</p>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    {activeTab === 'history1' && (
                                        <div id="history1" className="tab-pane active">
                                            <h4>History of the Diocese :</h4>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <img src="images/all-img/madha.png" style={{ width: '100%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px', padding: '10px' }} alt="" className="img-responsive" />
                                                </div>
                                                <div className="col-lg-9">
                                                    <p style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '25px', letterSpacing: '0.5px' }}><img src="images/all-img/tick.png" alt="" style={{ marginRight: '10px', width: '20px', height: '20px' }} />The Indian history Christianity reveals that Rayalaseema is the cradle of Catholicism in Andhra Pradesh. The two districts of this region Anantapur and kurnool witness or gave birth to Catholicism in Krishnapuram and Onteddupalle, Polur and Cowlur respectively. The Karnatic Jesuit missionaries sowed the seeds of Christianity in these villages from 1700. They also contributed extensively to Telugu Christian literature. It is recorded that the 1st person accepted Christ in Andra Prades was Rangappa of Sale Caste. Later in 1718 Thumma Rayaappa Reddy was baptized by Fr. LeeGac. As the Holy relics of the Carnatic mission today, we have three tombs of Jesuit missionaries in Krshnapuram.</p>

                                                    <p style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '25px', letterSpacing: '0.5px' }}><img src="images/all-img/tick.png" alt="" style={{ marginRight: '10px', width: '20px', height: '20px' }} />After the withdrawal of the Jesuits in 1773, the Paris Foriegn Missionary Society took over the missionary task and kept alive the faith of the people. From 1875 onwards, the Mill Hill Fathers also labored in the Western parts of the diocese for some time. As a result of their hard work, kurnool was erected as Diocese in 1967. Most Rev. Joseph Rajappa, Most Rev. Matthew Cheriankunnel, Most Rev. S. A. Aruliah and Most Rev. G. Johannes initiated many developmental activities in the fields of evangelization, education, health and social development.</p>

                                                    <Link to="/history" className="btn btn-primary" id='btnmore'>
                                                        More Information
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'mission2' && (
                                        <div id="mission2" className="tab-pane active">
                                            <h4>Our Mission :</h4>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <img src="images/all-img/5.png" alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-lg-9">
                                                    <p style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '25px', letterSpacing: '0.5px' }}>Your grace is sufficient for me</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'vision3' && (
                                        <div id="vision3" className="tab-pane active">
                                            <h4>Our Vision :</h4>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <img src="images/all-img/shrine.webp" alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-lg-9">
                                                    <p style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '25px', letterSpacing: '0.5px' }}>Our vision is to provide support and care for the community through...</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'bishop4' && (
                                        <div id="bishop4" className="tab-pane active">
                                              <h4>Bishop Profile :</h4>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <img src="images/all-img/newbishop.jpeg" alt="" className="img-fluid" style={{ width: '90%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px', padding: '10px' }} />
                                                    {/* <h6 className="mt-4 ml-3 text-center">Most Rev. Gorantla Johannes, OCD</h6>
                                                    <p className="text-center">Bishop of Kurnool Diocese</p> */}
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h4>Most Rev. Gorantla Johannes, OCD</h4>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <p>Bishop of Kurnool Diocese</p>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-between">
                                                        <div className="col-6">
                                                            <dl>
                                                                <dt><i className="fa fa-user"></i> Bishop Name:</dt>
                                                                <dd>Most Rev. Gorantla Johannes, OCD</dd>

                                                                <dt><i className="fa fa-birthday-cake"></i> Date of Birth:</dt>
                                                                <dd>27 Feb 1974</dd>

                                                                <dt><i className="fa fa-map-marker"></i> Place of Birth:</dt>
                                                                <dd>Nawabupeta, in the diocese of Vijayawada</dd>

                                                                <dt><i className="fa fa-language"></i> Languages Spoken:</dt>
                                                                <dd>Telugu, Hindi, Malayalam, English, Italian, German and Spanish</dd>
                                                            </dl>
                                                        </div>
                                                        <div className="col-6">
                                                            <dl>
                                                                <dt><i className="fa fa-calendar-o"></i> Ordination Date:</dt>
                                                                <dd>10 January 2002</dd>

                                                                <dt><i className="fa fa-book"></i> Studies:</dt>
                                                                <dd><img src="images/all-img/tick.png" alt="" style={{ marginRight: '10px', width: '20px', height: '20px' }} /> BA Philosophy (Gold Medal in MG University, Kerala); B. Th from Teresianum, Rome; Licentiate in Sacred Scripture SSL from Biblicum, Rome; Doctorate in Biblical Theology STD from the Gregorian University, Rome.</dd>

                                                                <dt><i className="fa fa-users"></i> Parents Name:</dt>
                                                                <dd>Gorantla Chinnappa and Rojanamma</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Link to="/bishop-profile" className="btn btn-primary" id='btnmore'>
                                                                View More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'message3' && (
                                        <div id="message3" className="tab-pane active">
                                            <h4>Bishop Message :</h4>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <img
                                                        src="images/all-img/newbishop.jpeg"
                                                        alt=""
                                                        className="img-fluid"
                                                        style={{
                                                            width: '90%',
                                                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                                            borderRadius: '10px',
                                                            padding: '10px'
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-lg-9 custom-scrollbar" style={{ overflowY: 'auto', maxHeight: '380px' }}>
                                                    {loading ? (
                                                        <div className="text-center">
                                                            <div className="spinner-border text-primary" role="status">
                                                                <span className="sr-only"><FontAwesomeIcon icon={faSpinner} spin size="2x" /></span>
                                                            </div>
                                                        </div>
                                                    ) : noData ? (
                                                        <div className="text-center">
                                                            <p className="mt-2 ml-3">No bishop message available</p>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className="message-content"
                                                            style={{
                                                                textAlign: 'justify',
                                                                fontSize: '16px',
                                                                lineHeight: '25px',
                                                                letterSpacing: '0.5px',
                                                                paddingRight: '15px'
                                                            }}
                                                            dangerouslySetInnerHTML={{ __html: message }}
                                                        />
                                                    )}
                                                    <Link to="/pastoral-message" className="btn btn-primary" id='btnmore'>
                                                        View More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whoweare;
