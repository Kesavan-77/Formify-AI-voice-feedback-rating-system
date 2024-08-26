import React, { useEffect, useRef } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

const AlanButton = () => {
    const navigate = useNavigate();

    const rootElref = useRef(null);
    const methods = useFormContext();

    useEffect(() => {
        alanBtn({
            key: '69daeb9545a6dff30d68c6aacfc9d5762e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                switch (commandData.command) {
                    case "name":
                        let name = commandData.data.value;
                        methods.setValue('name', name);
                        break;
                    case "email":
                        let email = commandData.data.value;
                        methods.setValue('email', email);
                        break;
                    case "organization":
                        let organization = commandData.data.value;
                        methods.setValue('organization', organization);
                        break;
                    case "demoForm":
                        navigate("/feedback1");
                        break;
                    case "openform":
                        navigate("/feedback2");
                        break;
                    case "ques1":
                        let ques1 = commandData.data.value;
                        methods.setValue('ques1', ques1);
                        break;
                    case "ques2":
                        let ques2 = commandData.data.value;
                        methods.setValue('ques2', ques2);
                        break;
                    case "ques3":
                        let ques3 = commandData.data.value;
                        methods.setValue('ques3', ques3);
                        break;
                    case "ques4":
                        let ques4 = commandData.data.value;
                        methods.setValue('ques4', ques4);
                        break;
                    case "ques5":
                        let ques5 = commandData.data.value;
                        methods.setValue('ques5', ques5);
                        break;
                    case "ques6":
                        let ques6 = commandData.data.value;
                        methods.setValue('ques6', ques6);
                        break;
                    case "submit":
                        navigate("/thankyou");
                        break;
                    default:
                        // Handle unknown command
                        break;
                }
            }
            
        });
    }, [navigate]);

    return (
        <div className="alan-btn-container">
            <div ref={rootElref}></div>
        </div>
    );
}

export default AlanButton;

