import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios library

export default function Feedback2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();
  const navigate = useNavigate();
  let result = "";
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://206.189.135.31:8000/analyze",
        data
      );
      console.log("Response: ", response.data);
      result = response.data;
      navigate("/thankyou", { state: { result: result } });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="feed-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Tell Us About Your Experience with Our Product/Service</h1>
        <p>(...start with question and its no.)</p>
        <div className="form-content">
          <label>1. How satisfied are you with our products/services?</label>
          <input {...register("ques1", { required: true })} />
        </div>
        <div className="form-content">
          <label>
            2. Were there any features or aspects of our product/service that
            you found particularly lacking or in need of improvement?
          </label>
          <input {...register("ques2", { required: true })} />
        </div>
        <div className="form-content">
          <label>
            3. How would you describe the ease of use/navigability of our
            product/service?
          </label>
          <input {...register("ques3", { required: true })} />
        </div>
        <div className="form-content">
          <label>
            4. Did you encounter any issues or difficulties while using our
            product/service? If so, please describe.
          </label>
          <input {...register("ques4", { required: true })} />
        </div>
        <div className="form-content">
          <label>
            5. How frequently do you use our product/service, and for what
            purposes?
          </label>
          <input {...register("ques5", { required: true })} />
        </div>
        <div className="form-content">
          <label>
            6.Have you encountered any bugs, glitches, or errors while using our
            product/service?
          </label>
          <input {...register("ques6", { required: true })} />
        </div>
        <input type="submit" className="feed-submit" />
      </form>
    </div>
  );
}
