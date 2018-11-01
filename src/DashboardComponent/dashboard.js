import React, { Component } from 'react'
import './dashboard.css'
import axios from 'axios';
import { TabView, TabPanel } from 'primereact/tabview';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Globals } from '../globals.js'



export default class DashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: "",
            language: "",
            accessToken: props.location.state,
            allMovieData: [],
            selectedMovie: "",
            filterdMovies: [],
            movieArrayToDisplay: [],
            director: "",
            language: "",
            year: "",
            genre: "",
            poster: "",
            showFilteredData: false,
            numbers: []
        }
        console.log("props in dash", props);

    }
    componentDidMount() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.state.accessToken
        }
        axios.get(Globals.moviesAPI, { headers: headers }).then(res => {
            this.state.allMovieData = res.data
            console.log(this.state.allMovieData);

        })
    }
    showMovieDetails = (event) => {
        for (let index = 0; index < this.state.allMovieData.length; index++) {
            if (this.state.selectedMovie == this.state.allMovieData[index].title) {
                this.state.movieArrayToDisplay.push(this.state.allMovieData[index])
            }
        }
        this.state.director = this.state.movieArrayToDisplay[0].director
        this.state.language = this.state.movieArrayToDisplay[0].language
        this.state.year = this.state.movieArrayToDisplay[0].year
        this.state.genre = this.state.movieArrayToDisplay[0].genre
        this.state.poster = this.state.movieArrayToDisplay[0].poster

        this.props.history.push({
            pathname: "/movie",
            state: {
                accessToken: this.state.accessToken,
                moviename: this.state.selectedMovie,
                language: this.state.language,
                director: this.state.director,
                year: this.state.year,
                genre: this.state.genre,
                poster: this.state.poster

            }
        })
    }
    render() {
        return (
            <div>
                <h2>Select Movie of your Choice...</h2>
                <div className="Dashboard" >
                    <Grid fluid>
                        <Row>
                            <Col md={5}>
                                <TabView className="Dashboard" activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                                    <TabPanel header="Upcoming Movies" leftIcon="pi pi-fw pi-video">
                                        No record for Now...
                                    </TabPanel>
                                    <TabPanel header="Now Showing Movies" leftIcon="pi pi-fw pi-video">
                                        <ul>
                                            {this.state.allMovieData.map((name, index) => {
                                                return (
                                                    <div key={index}>
                                                        <RadioButton inputId="rb2" name="selectedMovie" value={name.title} onChange={(e) => this.setState({ selectedMovie: e.value })}
                                                            checked={this.state.selectedMovie === name.title} ></RadioButton>
                                                        <label htmlFor="rb2" className="p-radiobutton-label" style={{ color: 'darkorange' }}>{name.title}</label>
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                        <Button label="Click to Book" className="p-button-info"
                                            onClick={(event) =>
                                                this.showMovieDetails(event)}
                                        />
                                    </TabPanel>
                                </TabView>
                            </Col>
                            <Col md={5}>
                            </Col>
                        </Row>
                    </Grid>
                </div>

            </div>
        )
    }

}