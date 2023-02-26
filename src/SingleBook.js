import React from 'react';
import Card from 'react-bootstrap/Card';
import { CommentArea } from './CommentArea';

export class SingleBook extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selected: false,
        };
        this.clickCard = this.clickCard.bind(this);
    }
    clickCard = (event) => {
        const cambiaSelected = this.props.cambiaSelected;
        cambiaSelected(this.props.book.asin);
    }
    render() {
        const book = this.props.book;
        const state = this.state;
        
        const myStyle = this.props.selected===true ? { borderWidth: 4, borderColor: 'red', borderStyle: 'solid' } : null;

        return (
            <>
            <Card style={myStyle} onClick={this.clickCard}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Asin {book.asin} - Prezzo {book.price}€
                    </Card.Text>
                </Card.Body>
            </Card>
            {this.props.selected && <CommentArea asin={book.asin} />}
            </>

        );
    }
}
