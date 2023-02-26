import React from 'react';
import { Form, Button } from 'react-bootstrap';

export class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            res: null,
            fetchError: false,
            loading: false,
        }
        this.onSubmit = (e) => {
            e.preventDefault();
            this.setState({loading: true})
            const url = props.url;
            const headers = props.headers;
            headers["method"] = 'POST';

            const form = e.currentTarget;
            if (form.checkValidity() === false) {
              return;
            }
 
            const data = {
                comment: form.querySelector('#formBasicRecensione').value,
                rate: Number(form.querySelector('#formBasicRate').value),
                elementId: props.elementId,
            };
            headers["body"] = JSON.stringify(data);

            fetch(url, headers).then(res=>res.json())
            .then(res=>{
                this.setState({res: res, loading: false})
            }, (err)=>{
                //gestione errore
                this.setState({fetchError: true, loading: false})
                console.log(err);
            })
        }
    }
    


    render() {
        const state = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicRecensione">
                    <Form.Label>Recensione</Form.Label>
                    <Form.Control type="text" placeholder="Scrivi recensione" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRate">
                    <Form.Label>Valuta</Form.Label>
                    <Form.Control type="number" placeholder="Valutazione" min={1} max={5}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Aggiungi
                </Button>
                {state.loading && <p>Loading...</p>}
                {state.res && <div>{state.res.state}</div>}
            </Form>
        );
    }
}
