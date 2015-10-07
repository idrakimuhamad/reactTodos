Header = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            incomplete: Tasks.find({ checked: { $ne: true } }).count()
        }
    },

    render() {
        return (
            <div className="bar bar-header bar-positive">
                <h1 className="title">{this.props.title} ({this.data.incomplete})</h1>
            </div>
        )
    }
})
