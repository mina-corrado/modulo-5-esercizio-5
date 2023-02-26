import React from 'react';
import Badge from 'react-bootstrap/Badge';

export class MyBadge extends React.Component {

    render() {
        const props = this.props;

        return (
            <div>
                <Badge variant={props.color}>{props.text}</Badge>
            </div>
        );
    }
}
