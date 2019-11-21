import React,{Component} from 'react';
import Field from '../../components/FieldCard'
import Api from '../../utils/api';

class Fields extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            fields:[]
        }
    }
    componentDidMount()
    {
        Api.getFields(1).then(fields=>this.setState({fields}))
    }
    render()
    {
        return <div className="row">
            {this.state.fields.map((field,index)=><Field key={index} name={field.name} description={field.description}/>)}
        </div>
    }
}

export default Fields;
