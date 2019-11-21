import React,{Component} from 'react';

class Field extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <div className="col-6 offset-3">
            {this.props.name} {this.props.description}
        </div>
    }

}

export default Field;


