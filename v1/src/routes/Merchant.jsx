import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { useSelector } from "react-redux";
import VideoBox from "../components/VideoBox";
import TickAnimation from '../resources/lotties/tickAnimation.json'
import './merchant.scss'

const Merchant = () => {
    const [formDone, setFormDone] = useState(false);
    const form = useRef();
    const [formData, setFormData] = useState({
        storeName: '',
        storeAddress: '',
        businessType: '',
        websiteLink: '',
        name: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        feedback: '',
    });
    const { handleSubmit } = useForm();
    
    const onSubmit = (event) => {
        sendEmail(event)
    }

    const content = useSelector((state) => state.language.language);
    const player = useRef();   

    const [screenSize, getDimension] = useState({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize]);
    
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: TickAnimation
    };
    
    const updateFormData = (event, property) => {
        const target = event.target;
        event.preventDefault();

        setFormData((prevState) => ({
            ...prevState,
            [property]: target.value,
        }));
    }

     const sendEmail = (event) => {
        event.preventDefault();
        setFormDone(true);
        console.log(formData);
        
        emailjs.send('service_g8pfoei', 'template_9qrqkza', formData, 'howejlV7p3kue6F_D')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setFormData({
            storeName: '',
            storeAddress: '',
            businessType: '',
            websiteLink: '',
            name: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            feedback: '',
        });
    }

    useEffect(() => {  
        if (player.current) {
            player.current.play();
        }      
    }, [formDone]);
    
    const Description = () => {
        return(
            <div className="description-wrapper">
                <div className="merchant-image"></div>
                <p className="text paragraph">{content.merchant.description}
                </p>
            </div>
        );
    }

    return(
        <div>
            <h2 className="header-xl">{content.merchant.header[0].text}<br className="break" /> {content.merchant.header[1].text}</h2>
            <div className="layout">
            {screenSize.dynamicWidth < 992 ? <Description /> : null}
                {/* <VideoBox url={content.merchant.videoLink} /> */}
                <div className="flex-row">
                    {screenSize.dynamicWidth >= 992 ? <Description /> : null}
                    <div className="form-wrapper">
                        <p className="form-title">{content.merchant.form.header}</p>
                        <Form ref={form} onSubmit={e => handleSubmit(onSubmit(e))}>
                            <Form.Group className="form-group" controlId="storeName">
                                <Form.Control 
                                    type="text" 
                                    placeholder={content.merchant.form.body[0].text}
                                    value={formData.storeName}
                                    onChange={(e) => updateFormData(e, 'storeName')}
                                    required
                                        />
                            </Form.Group>
                            <Form.Group className="form-group" controlId="storeAddress">
                                <Form.Control 
                                    type="text" 
                                    placeholder={content.merchant.form.body[1].text}
                                    value={formData.storeAddress}
                                    onChange={(e) => updateFormData(e, 'storeAddress')}
                                    required
                                        />
                            </Form.Group>
                            <Form.Group className="form-group" controlId="businessType">
                                <Form.Control 
                                    type="text" 
                                    placeholder={content.merchant.form.body[2].text}
                                    value={formData.businessType}
                                    onChange={(e) => updateFormData(e, 'businessType')}
                                    required
                                        />
                            </Form.Group>
                            <Form.Group className="form-group" controlId="websiteLink">
                                <Form.Control 
                                    type="url" 
                                    placeholder={content.merchant.form.body[3].text}
                                    value={formData.websiteLink}
                                    onChange={(e) => updateFormData(e, 'websiteLink')}
                                    required
                                        />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} sm={6} className="form-group" controlId="name">
                                    <Form.Control 
                                        type="text" 
                                        placeholder={content.merchant.form.body[5].text}
                                        value={formData.name}
                                        onChange={(e) => updateFormData(e, 'name')}
                                        required
                                        />
                                </Form.Group>
                                <Form.Group as={Col} sm={6} className="form-group" controlId="lastName">
                                    <Form.Control 
                                        type="text" 
                                        placeholder={content.merchant.form.body[6].text}
                                        value={formData.lastName}
                                        onChange={(e) => updateFormData(e, 'lastName')}
                                        required
                                        />
                                </Form.Group>
                            </Row>
                            <Form.Group className="form-group" controlId="emailAddress">
                                <Form.Control 
                                    type="email" 
                                    placeholder={content.merchant.form.body[7].text}
                                    value={formData.emailAddress}
                                    onChange={(e) => updateFormData(e, 'emailAddress')}
                                    required
                                        />
                            </Form.Group>
                            <Form.Group className="form-group" controlId="phoneNumber">
                                <Form.Control 
                                    type="tel" 
                                    placeholder={content.merchant.form.body[8].text}
                                    value={formData.phoneNumber}
                                    onChange={(e) => updateFormData(e, 'phoneNumber')}
                                    required
                                        />
                            </Form.Group>
                            <Form.Group className="form-group" controlId="feedback">
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder={content.merchant.form.body[9].text}
                                    value={formData.feedback}
                                    onChange={(e) => updateFormData(e, 'feedback')} />
                            </Form.Group>
                            {!formDone ? 
                            <Button type="submit">
                                {content.merchant.form.body[10].text}
                            </Button>
                            : 
                            <Lottie
                                ref={player}
                                options={defaultOptions} 
                                height={45} 
                                width={45}
                                isClickToPauseDisabled={true} 
                            />
                            }
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Merchant;