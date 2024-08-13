import React from "react";
import Form from "./Form";

export default function Booking(props) {
    return (
        <Form 
        availableTimes = {props.availableTimes} 
        dispatch={props.dispatch}
        SubmitForm = {props.submitForm()}/>
    )
}