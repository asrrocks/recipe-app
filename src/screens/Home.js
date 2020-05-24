import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <RecipeCard />
            </div>
        );
    }
}