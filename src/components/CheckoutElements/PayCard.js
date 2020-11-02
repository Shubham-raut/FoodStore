import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
} from "./cardUtils";

const PayCard = (props) => {
    const onSubmit = () => {
        props.changeStep(props.step + 1);
    }

    const backHandlor = () => {
        props.changeStep(props.step - 1);
    }

    return (
        <>
            <h2>Payment Details</h2>
            <Styles>
                <Form
                    onSubmit={onSubmit}
                    render={({
                        handleSubmit,
                        form,
                        submitting,
                        pristine,
                        values,
                        active,
                    }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Card
                                    number={values.number || ""}
                                    name={values.name || ""}
                                    expiry={values.expiry || ""}
                                    cvc={values.cvc || ""}
                                    focused={active}
                                />
                                <div>
                                    <Field
                                        name="number"
                                        component="input"
                                        type="text"
                                        pattern="[\d| ]{16,22}"
                                        placeholder="Card Number"
                                        format={formatCreditCardNumber}
                                    />
                                </div>
                                <div>
                                    <Field
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <Field
                                        name="expiry"
                                        component="input"
                                        type="text"
                                        pattern="\d\d/\d\d"
                                        placeholder="Valid Thru"
                                        format={formatExpirationDate}
                                    />
                                </div>
                                <div>
                                    <Field
                                        name="cvc"
                                        component="input"
                                        type="text"
                                        pattern="\d{3,4}"
                                        placeholder="CVC"
                                        format={formatCVC}
                                    />
                                </div>

                                <p className='addCombot gap'>
                                    <input type='checkbox' />
                                    <p className='note'>Use this address for payment details</p>
                                </p>

                                <div className="buttons">
                                    <button
                                        type="button"
                                        onClick={backHandlor}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                    >
                                        Reset
                                    </button>
                                    <button type="submit" disabled={submitting}>
                                        Next
                                    </button>
                                </div>
                            </form>
                        );
                    }}
                />
            </Styles>
        </>
    );
}

export default PayCard;
