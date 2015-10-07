
Subheader = React.createClass({

    handleSubmit(events) {
        event.preventDefault();

        let input = React.findDOMNode(this.refs.textInput);

        if (input.value) {
            Meteor.call('addTask', input.value);

            input.value = '';
        }
    },

    render() {
        return (
            <div className="bar bar-subheader has-padding">
                <form className="new-task" onSubmit={this.handleSubmit}>
                    <input type="text" ref="textInput" placeholder="Type new tasks and enter" />
                </form>
            </div>
        )
    }
});
