import React from 'react';

class ProfileStatus extends React.Component {
    //statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {//стрелочная функция, не надо bind-ить
        this.setState({//асинхронный метод
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //debugger
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        //console.log("componentDidUpdate ProfileStatus");
    }

    render() {
        //console.log("render ProfileStatus");
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;