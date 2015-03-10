var React = require('../bower_components/react/react');

var Test = React.createClass({
    getDefaultProps: function() {
        return {
          id: 7
        };
    },
    render: function() {
        return (<div>{this.props.id}:{this.props.name}</div>);
    },
});

var component = React.render(<Test name="var" />, document.getElementById('app'));

component.setProps({ name: 'Yossy' }, function() {
    alert('Yossy!!');
});
