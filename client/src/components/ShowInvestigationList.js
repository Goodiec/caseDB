import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InvestigationCard from './InvestigationCard';

class ShowInvestigationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investigations: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8086/api/investigations')
      .then(res => {
        this.setState({
          investigations: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowInvestigationList');
      })
  };


  render() {
    const investigations = this.state.investigations;
    console.log("PrintInvestigation: " + investigations);
    let investigationList;

    if(!investigations) {
      investigationList = "there is no investigation record!";
    } else {
      investigationList = investigations.map((investigation, k) =>
        <InvestigationCard investigation={investigation} key={k} />
      );
    }

    return (
      <div className="ShowInvestigationList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Investigation List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-case" className="btn btn-outline-warning float-right">
                + Add New Record
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {investigationList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowInvestigationList;