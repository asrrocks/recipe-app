import React from 'react'
import { Form, Col, InputGroup, Button } from 'react-bootstrap'
import { FaBookOpen, FaHeart, FaLinkedin, FaInstagram, FaGlobeAsia, FaGithub, FaSearch } from 'react-icons/fa'
const Header = (props) => {
    return (
        <div className="header">
            <div className="textContainer">
                <h1>Recipe Book <FaBookOpen /></h1>
                <h5>Made with <span className="redColor"><FaHeart /></span> by Anubhav Singh</h5>
                <div className="socialMediaContainer">
                    <a href="https://www.linkedin.com/in/anubhavsingh1998/" target="_blank"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/anubhav_singh18/" target="_blank"><FaInstagram /></a>
                    <a href="https://fresume.in/anubhav" target="_blank"><FaGlobeAsia /></a>
                    <a href="https://github.com/asrrocks" target="_blank"><FaGithub /></a>

                </div>
                <div className="SearchContainer">
                    <Form>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">

                            <InputGroup>

                                <Form.Control
                                    type="text"
                                    placeholder="Search your recipe ..... "
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    size="lg"
                                    className="INPUTSEARCH"
                                    value={props.search}
                                    onChange={props.onInputChange}
                                />
                                <InputGroup.Prepend>
                                    {/* <InputGroup.Text id="inputGroupPrepend"><FaSearch /></InputGroup.Text> */}
                                    <a href="#recipes" className="btn btn-lg BTNSearch" onClick={props.onSearchClick}><FaSearch /></a>

                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </div>
            </div>

        </div>
    );
}

export default Header;