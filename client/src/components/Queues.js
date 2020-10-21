import React from "react";
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"


const Queues = (props) => {
    //todo: replace fixed values with data from json file.
    //todo: onClick API.bookRequestType che manda al server il tipo della richiesta prenotata
    let { requestTypes, bookTicket, book_success, ticket_number } = props;
    return <>

        {book_success ? <Alert ticket_number={ticket_number}/> : null}
        <Card style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Title>Available queues</Card.Title>
                <Card.Text>
                    <Table>
                        <thead>
                            <tr>
                                <th> Request type </th>
                                <th> Expected waiting time </th>
                                <th> </th>
                            </tr>
                        </thead>

                        <tbody>
                            {requestTypes.map(vt => <QueueRow key={vt.typeCode} requestTypes={vt} bookTicket={bookTicket} book_success={book_success} />)}

                        </tbody>
                    </Table>
                </Card.Text>

            </Card.Body>
        </Card>
    </>


}


function QueueRow(props) {
    let { requestTypes, bookTicket, book_success } = props;
    return <tr><QueueElement requestTypes={requestTypes} bookTicket={bookTicket} book_success={book_success} /></tr>
}

function QueueElement(props) {
    let { requestTypes, bookTicket } = props;
    console.log(requestTypes);
    return <>
        <td>{requestTypes.typeName}</td>
        <td>{requestTypes.waitingTime === -1 ? "not available" : requestTypes.waitingTime}</td>
        <td><Button disabled={requestTypes.waitingTime === -1 ? true : false} onClick={() => bookTicket(requestTypes.typeCode)}> BOOK </Button></td>
    </>
}

function Alert (props){
    let {ticket_number} = props;
return <Badge variant="success">Il tuo numero è: {ticket_number}</Badge>
}



export default Queues;