import React,{Component} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

class ApplicationCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="col-6 ">
            <div className="application-card">
                <h4><b>{this.props.title} {this.props.description}</b></h4>
                <h6>Area: {this.props.area}
                </h6>
                <div className="row">
                    <div className="col-6 ">
                        <button onClick={this.props.onMatchApp}>Match</button>
                    </div>
                    <div className="col-6 offset-6"><Link to={`/fields/${this.props.id}`}>  
                    {this.props.fields} fields
                    </Link></div>

                    </div>
            </div>
        </div>
    }
}

export default ApplicationCard;

