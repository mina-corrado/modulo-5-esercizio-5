import React from 'react';
import Card from 'react-bootstrap/Card';

export class SingleComment extends React.Component {

    render() {
        const recensione = this.props.recensione;

        return (
            <div>
                {/* <div>Recensione: {recensione.comment}</div>
                <div>Valutazione: {recensione.rate}</div> */}
                <Card className='my-2'>
                <Card.Body>
                    <Card.Text className='text-left'>
                         {recensione.comment} 
                    </Card.Text>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                    <div>
                        {recensione.author.split('@')[0]}
                    </div>
                    <div>
                        Voto: <strong>
                            {recensione.rate}
                            </strong>
                    </div>
                    </div>
                </Card.Body>
            </Card>
            </div>
        );
    }
}
