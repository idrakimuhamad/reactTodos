Task = React.createClass({
    propTypes: {
        task: React.PropTypes.object.isRequired
    },

    toggleChecked() {
        Meteor.call('setChecked', this.props.task._id, ! this.props.task.checked);
    },

    deleteTask() {
        Meteor.call('removeTask', this.props.task._id);
    },

    render() {
        // set class for checked unchecked status
        let checkClass = this.props.task.checked ? 'checked' : '';

        checkClass += ' item item-icon-right';

        return (
            <li className={checkClass}>
                <label className="task">
                    <input type="checkbox" readOnly={true} checked={this.props.task.checked} onClick={this.toggleChecked} />
                    {this.props.task.text}
                </label>

                <span className="delete-task" onClick={this.deleteTask}>
                    <i className="icon assertive ion-ios-trash-outline"></i>
                </span>
            </li>
        );
    }
});
