import React from "react";
import Card from "react-bootstrap/Alert"

const Alert = () => {
    return <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
            SUCCESS!
          </p>
        <hr />
        <p className="mb-0">
            Your ticket number is: {}
        </p>
    </Alert>
}

export default Alert;