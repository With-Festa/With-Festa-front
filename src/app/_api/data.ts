import React from 'react';

const submitData = async (formData) => {
    const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (!response.ok) {
        throw new Error();
    }
};

export default submitData;
