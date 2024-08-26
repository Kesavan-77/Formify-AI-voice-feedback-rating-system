import { useNavigate } from "react-router-dom";
import '../Styles/form1.css';
import { useFormContext } from "react-hook-form";

const Feedback1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/feedback2");
  };

  return (
    <div className="feed-page">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Provide your <span>valuable</span><br/> feedback</h1>
            <div className="form-content">
                <label>Enter Your Name</label>
                <input {...register("name", { required: true })} placeholder="Enter your name" required/>
            </div>
            <div  className="form-content">
                <label>Enter Your E-mail address</label>
                <input {...register("email", { required: true })} placeholder="Enter your E-mail address" required/>
            </div>
            <div  className="form-content">
                <label>Enter Your Organization name</label>
                <input {...register("organization", { required: true })} placeholder="Enter Your organization name" required/>
            </div>
            <input type="submit" value='Next' className="feed-submit" />
        </form>
        </div>
  );
};

export default Feedback1;
