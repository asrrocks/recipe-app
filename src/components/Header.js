import React, { Component } from 'react'
import { Form, Col, InputGroup, Button } from 'react-bootstrap'
import { FaHamburger, FaHeart, FaLinkedin, FaInstagram, FaGlobeAsia, FaGithub, FaSearch } from 'react-icons/fa'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="textContainer">
                    <h1>Recipe Book <FaHamburger /></h1>
                    <h5>Made with <span className="redColor"><FaHeart /></span> by Anubhav Singh</h5>
                    <div className="socialMediaContainer">
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaGlobeAsia /></a>
                        <a href="#"><FaGithub /></a>

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
                                    />
                                    <InputGroup.Prepend>
                                        {/* <InputGroup.Text id="inputGroupPrepend"><FaSearch /></InputGroup.Text> */}
                                        <Button className="btn btn-lg BTNSearch" type="submit"><FaSearch /></Button>

                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}