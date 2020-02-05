import React, { Component } from 'react'
import FormArt from './partials/FormArt'

export default class ArtAdd extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <FormArt/>
                    </div>
                </div>
            </div>
        )
    }
}
