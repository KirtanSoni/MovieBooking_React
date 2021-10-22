import React from "react";
import phn from './Forms/phn.png'
import mail from './Forms/mail.png'
import add from './Forms/add.png'
function ContactUs(){
    
    return <div className="ContactUs">
    <div className="container_1">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                    <div className="contact_info_phn d-flex justify-content-start align-items-center">
                    <img src={phn} height="50" alt="phn" />
                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            Phone
                        </div>
                        <div className="contact_info_text">
                            9529283924797
                        </div>
                        </div>
                    </div>   
                    <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src={mail} height="50" alt="Email" />
                        <div className="contact_info_content">
                        <div className="contact_info_title">
                       Email
                        </div>
                        <div className="contact_info_text">
                            Kunj@gmail.com
                        </div>
                        </div>
                    </div>  

                    <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src={add} height="50"  alt="Address" />
                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            Adrress
                        </div>
                        <div className="contact_info_text">
                          Gujarat
                        </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>

    <div className="contact_form">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="contact_form_container py-5">
                        <div className="contact_form_title">
                            <b>Connect with Us</b>
                        </div>
                        <form id="contact_form_1">
                            <div className="contact_form_name d-flex justify-content-between align-items-between">
                                <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your name" required="true">

                                </input>

                                <input type="email" id="contact_form_name" className="contact_form_name input_field" placeholder="Your Email" required="true">

                                </input>

                                <input type="number" id="contact_form_name" className="contact_form_name input_field" placeholder="Your Phone Number" required="true">

                                </input>
                            </div>

                            <div className="contact_form_text mt-5">
                                <textarea className="text_field contact_form_message" placeholder="Enter Your Statement" 
                                cols="116" rows="5"></textarea>
                            </div>

                            <div className="contact_form_button">
                                <button type="Submit" className="btn btn-success">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}
export default ContactUs;