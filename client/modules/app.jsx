Meteor.subscribe('tasks');

App = React.createClass({
    mixins: [ReactMeteorData],

    getInitialState() {
        return {
            hideCompleted: false
        }
    },

    getMeteorData() {
        let query = {};

        if (this.state.hideCompleted) {
            query = { checked: { $ne: true }};
        }

        return {
            tasks: Tasks.find(query, { sort: { createdAt: -1 } }).fetch()
        }
    },

    // render each of the tasks
    renderTasks() {
        return this.data.tasks.map((task) => {
            return <Task key={task._id} task={task} />;
        });
    },

    toggleCompleted() {
        this.setState({
            hideCompleted: ! this.state.hideCompleted
        });

        console.log(this.state.hideCompleted);
    },

    render() {
        return (
            <div className="ionic-body">
                <Header title="Todo List" />
                <Subheader />

                <div className="view">
                    <div className="scroll-content ionic-scroll">
                        <div className="content overflow-scroll has-subheader">
                            <ul className="list">
                                <li className="item item-toggle">
                                     Hide Completed Tasks
                                     <label className="toggle toggle-assertive" onMouseDown={this.toggleCompleted}>
                                       <input type="checkbox" />
                                       <div className="track">
                                         <div className="handle"></div>
                                       </div>
                                     </label>
                                  </li>
                                {this.renderTasks()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
