import React,{Component} from 'react';
import ApplicationCard from '../../components/ApplicationCard';
import Api from '../../utils/api';


class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            applications:[]
        }
    }
    matchApp=(application)=>{

    }

    componentDidMount()
    {
        Api.getApplications().then(applications=>{
            this.setState({applications});
        })
    }

    render()
    {
        return <div className="row">
            <div className="col-6 offset-3">
            {this.props.session&&<h1>Hello {this.props.session.name}</h1>}
            </div>
            {this.state.applications.map((application,index)=><ApplicationCard id={application._id} fields={application.fields} key={index} title={application.title} description={application.description} area={application.area} onMatchApp={()=>this.matchApp(application)} />)}
        </div>
    }
}

export default HomePage;
