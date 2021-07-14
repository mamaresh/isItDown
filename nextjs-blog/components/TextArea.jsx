import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function TextArea({
}) {
    return (
        <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
    );
}