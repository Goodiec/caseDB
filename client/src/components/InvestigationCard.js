import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const InvestigationCard = (props) => {
    const  investigation  = props.investigation;
    const linkIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
  </svg>

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    Title: <Link to={`/show-case/${investigation._id}`}>
                        { investigation.title } {linkIcon}
                    </Link>
                </h2>
                <p>Description: {investigation.investigation_description}</p>
                <h3>Inspector: {investigation.inspector_name}</h3>
            </div>
        </div>
    )
};

export default InvestigationCard;