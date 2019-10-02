import React, { Component } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from 'reactstrap';

const FormWrapper = styled(FormGroup)`
    position: relative;
    span {
        font-weight: 700;
        font-side: 32px;
        color: red;
        position: absolute;
        right: 10px;
        top: 7px;
        :hover {
            color: darkred;
            cursor: pointer;
        }
    }
`
//Since FormGroup already exists in react is needs to be in ()

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleInputChange = (event) => {
        //console.log("event.target.value", event.target.value);
        //could skip the () for a single argument function
        //update state of term
        this.setState({ term: event.target.value })
        //run a youtube search based on term
        this.props.searchYouTube(event.target.value);
        //console.log("this.state.term", this.state.term)
    }

    render() {
        return (
            <Form onSubmit={ event => event.preventDefault()}>
            <FormWrapper>
              <Label for="youTubeSearch" hidden>YouTube Search</Label>
              <Input
                type="text"
                name="youTubeSearch"
                id="youTubeSearch"
                placeholder="Search for videos here"
                value={this.state.term}
                onChange={this.handleInputChange}
                />
                <span onClick={()=> this.setState({ term: "" })}>X</span>
            </FormWrapper>
            </Form>
        )
    }
}

export default SearchBar;

//An alternate way to write the same thing
//this would work except the () implies an explicit return but then a console.log won't work!
// const SearchBar = () => (
//     <h2>Search Bar</h2>
// )