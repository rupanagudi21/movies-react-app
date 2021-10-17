import React, { Component } from 'react'
import './styles.scss';
import { InputText } from 'primereact/inputtext';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''

        }
    }
    render() {


        return (
            <div class="topnav">
                <a class="active" href="">Movies</a>
                {/* <a href="#news">News</a>
                <a href="#contact">Contact</a> */}
                <div class="topnav-right">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            value={this.state.search}
                            className="p-inputtext-sm  p-mb-2 search-bar"
                            onChange={(e) => this.setState({ search: e.target.value })} placeholder="Search" />
                    </span>

                    <img src="./images/avtar.jpg" className='avtar' />

                </div>
            </div>
        )
    }
}
