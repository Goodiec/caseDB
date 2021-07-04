import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showInvestigationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investigation: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8086/api/investigations/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showInvestigationDetails-API-response: " + res.data);
        this.setState({
          investigation: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowInvestigationDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8086/api/investigations/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error from ShowInvestigationDetails_deleteClick");
      })
  };


  render() {

    const investigation = this.state.investigation;
    let InvestigationItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ investigation.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Inspector</td>
            <td>{ investigation.inspector_name }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ investigation.investigation_description }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Date</td>
            <td>{ investigation.investigation_date }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowInvestigationDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Investigation List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Investigation Record</h1>
              <p className="lead text-center">
                  View Investigation Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { InvestigationItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,investigation._id)}>Delete Investigation</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-case/${investigation._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Investigation
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default showInvestigationDetails;