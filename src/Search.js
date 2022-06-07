import React, { useEffect, useState } from 'react';

// function Search(props) {}
class Search extends React.Component {
    // React.Component is main blueprint
    constructor(props) {
        // called when we create a new Search instance

        // super calls Search's parent constructor
        super(props); // new React.Component(props)

        // custom extended Search behavior below

        this.state = { searchText: '' }; // all our state in one object
        this.submit = this.submit.bind(this);
        // ^ tells js to use the Search instance that the submit method was called with
    }

    // class instance method, like a function with the class instance (this) in the scope
    submit(event) {
        // variables in scope: event, this
        event.preventDefault();
        !!this.state.searchText &&
            this.props.handleSearch(this.state.searchText);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    {/* submit method instead of submit function */}
                    <label htmlFor="search">Search</label>
                    <input
                        id="search"
                        value={this.state.searchText}
                        onChange={event =>
                            this.setState({ searchText: event.target.value })
                        }
                    ></input>
                    <button type="submit">Submit search</button>
                </form>
            </div>
        );
    }
}

export default Search;
