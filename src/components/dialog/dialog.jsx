import React from 'react'
import './dialog.css'

class Dialog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={active: false,title: null,body: null,callback: null};
        this.props=props;
        this.originalert=window.alert;
    }
    componentDidMount()
    {
        window.alert=(t,b,call,states)=>{
            this.setState({title: t,body: b,callback: call,active: true,showOK: states.showOK,showYes: states.showYes,showNo: states.showNo,showCancel: states.showCancel});
        };
    }
    componentWillUnmount()
    {
        window.alert=this.originalert;
    }
    handleClose(ret)
    {
        if(this.state.callback)
        {
            this.state.callback(ret);
            this.setState({active: false,title: null,body: null,callback: null});
        }
    }
    render()
    {
        if(this.state.active)
        {
            return (<div className='dialog'>
                <div className='dialogtitle'>{this.state.title}</div>
                <div className='dialogbody'>{this.state.body}</div>
                <div className='dialogclose' onClick={()=>this.handleClose(0)}>×</div>
                {this.state.showOK?<button onClick={()=>this.handleClose(1)}>OK</button>:<></>}
                {this.state.showYes?<button onClick={()=>this.handleClose(2)}>Yes</button>:<></>}
                {this.state.showNo?<button onClick={()=>this.handleClose(3)}>No</button>:<></>}
                {this.state.showCancel?<button onClick={()=>this.handleClose(4)}>Cancel</button>:<></>}
            </div>);
        }
        return <></>;
    }
}

export default Dialog;