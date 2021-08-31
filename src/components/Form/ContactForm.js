import React, { useState }  from 'react'
import axios from 'axios';
import styled from 'styled-components';


const ContactForm = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: 'post',
            url: 'https://getform.io/f/c48520df-9660-4b8e-92dd-506c5ed018d1',
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, 'Thanks!', form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <ContactFormBody method={'post'} action={'https://getform.io/f/c48520df-9660-4b8e-92dd-506c5ed018d1'} name={'contact-form'} onSubmit={handleOnSubmit}>
            <fieldset>
                <label for={'name'}>Your name</label>
                <input type={'text'} name={'name'} />
            </fieldset>
            <fieldset>
                <label for={'email'}>Your email</label>
                <input type={'email'} name={'email'} />
            </fieldset>
            <fieldset>
                <label for={'subject'}>Subject</label>
                <input type={'text'} name={'subject'} />
                <label for={'message'}>Message</label>
                <textarea name={'message'}></textarea>
                <button type={'submit'}>Submit</button>
            </fieldset>
        </ContactFormBody> 
    );
};


const ContactFormBody = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    fieldset {
        position: relative;
        padding: 0;
        width: 49%;
        display: flex;
        flex-direction: column;
        border: none;

        label {
            margin-bottom: 5px;
        }

        input, textarea {
            margin-bottom: 10px;
            border: 1px solid rgb(141, 145, 141);
            border-radius: 3px;
        }

        input {
            padding: 10px;
        }

        textarea {
            margin-bottom: 20px;
            padding: 5px 10px;
            height: 20vh;
        }

        button {
            cursor: pointer;
            width: 180px;
            height: 40px;
            border: 2px solid rgb(0, 0, 0);
            border-radius: 5px;
            font-size: 16px;
            text-align: center;
            letter-spacing: 1px;
            background: transparent;
            color: rgb(0, 0, 0);
        }

        &:last-child {
            width: 100%;

            @media (max-width: 768px) {
                button {
                    margin: 0 auto;
                }
            }
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

  
export default ContactForm;