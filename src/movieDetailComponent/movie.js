import React, { Component } from 'react'
import './movie.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Rating } from 'primereact/rating';
import { Spinner } from 'primereact/spinner';
import { Button } from 'primereact/button';
import {Messages} from 'primereact/messages';

export default class MovieDetailComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accessToken: props.location.state.accessToken,
            movie: props.location.state.moviename,
            director: props.location.state.director,
            language: props.location.state.language,
            year: props.location.state.year,
            genre: props.location.state.genre,
            poster: props.location.state.poster,
            // redirectTrue : false
        }
        this.showMultiple = this.showMultiple.bind(this);

    }
    componentWillMount(){}
    showMultiple() {
        this.messages.show([
            { severity: 'success', summary: 'Success', detail: 'Ticket booked Successfully!!' },
            { severity: 'info', summary: 'Info', detail: 'Click on Dashboard for another movie booking!!' }
        ]);
        // this.state.redirectTrue = true
    }
    bookTicket() {
        setTimeout(this.props.history.push('/dashboard', this.state.accessToken), 3000)
    }

    render() {
        return (

            <div>

                <h1>Book your movie Ticket....</h1>
                <div className="Movie">
                <Messages ref={(el) => this.messages = el} />
                    <Grid fluid>
                    <Row>
                    <Button style={{ paddingLeft: '2%' }} label="Dashboard" className="p-button-success"
                        onClick={(event) =>
                            this.bookTicket(event)}/>
                    </Row><br></br>
                        <Row>
                            <Col md={5} >
                                <img src={this.state.poster} style={{ width: '90%' }}></img>
                            </Col>
                            <Col md={5}>
                                <span>
                                    Movie Name :- {this.state.movie}<br></br>
                                    Language :- {this.state.language}<br></br>
                                    Type :-  {this.state.genre}<br></br>
                                    Year :- {this.state.year}<br></br>
                                    Rating :- <Rating value={3} readonly={true} stars={5} cancel={false} /><br></br>
                                    Number of Tickets :-
                                    <Col sm={1}>
                                        <Spinner value={this.state.value1} size={30} onChange={(e) => this.setState({ value1: e.value })} />
                                    </Col><br></br>
                                    <Button style={{ paddingLeft: '2%' }} label="Book Ticket" className="p-button-success"
                                        onClick={(event) =>
                                            this.showMultiple(event)}
                                    />
                                </span>
                            </Col>
                        </Row>
                    </Grid>
                   {/* {this.state.redirectTrue} ?  <Redirect to={{pathname:'/',state: {from:this.props.location.state}}}></Redirect> : null */}
                </div>
            </div>
        )
    }
}