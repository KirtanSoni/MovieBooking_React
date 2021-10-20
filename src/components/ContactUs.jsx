import React from "react";

const ContactUs=()=>{
    
    return (
        <>
        
    <div className="container">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                    <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F64-641423_blue-phone-logo-png-transparent-blue-phone-icon.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FbbTbRm_blue-phone-logo-png-transparent-blue-phone-icon%2F&tbnid=jdk5W9w4UBU5rM&vet=12ahUKEwi_1Lyf99jzAhVc13MBHXpMDd4QMygKegUIARDdAQ..i&docid=gUZ353HLOoi84M&w=860&h=708&q=phone%20logo%20png&ved=2ahUKEwi_1Lyf99jzAhVc13MBHXpMDd4QMygKegUIARDdAQ" alt="phone" />
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
                        <img src="" alt="Email" />
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
                        <img src="" alt="Address" />
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
                            Connect with Us
                        </div>
                        <form id="contact_form">
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
    
    </>
    )
}
export default ContactUs;