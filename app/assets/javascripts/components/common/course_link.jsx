import React from 'react';
import { Link } from 'react-router';

const CourseLink = React.createClass({
  displayName: 'CourseLink',

  propTypes: {
    to: React.PropTypes.string,
    onClick: React.PropTypes.func,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  render() {
    return (
      <Link
        to={this.props.to}
        onClick={this.props.onClick}
        className={this.props.className}
      >
        {this.props.children}
      </Link>
    );
  }
}
);

export default CourseLink;
