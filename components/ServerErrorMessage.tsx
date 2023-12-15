import useRegistrationStore from "@/store/registerStore";

const ServerErrorMessage: React.FC = () => {
    const {serverResponseGenerateOTP, currentStep} = useRegistrationStore();
    return (
        <div>
        {(currentStep === 0 || currentStep === 1 || currentStep === 2 || currentStep === 3) && (serverResponseGenerateOTP?.issuccess) && (
        <span 
        style={{background:"#184f18", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
        className="text-green-500"
        >
            
             {`${serverResponseGenerateOTP?.message}`}
        </span>
        )}  
        {(currentStep === 0 || currentStep === 1 || currentStep === 2 || currentStep === 3) && (!serverResponseGenerateOTP?.issuccess) && (
        <span 
        style={{background:"#ff000030", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
        className="text-red-500">{`${serverResponseGenerateOTP?.message}`}</span>
        )}
        </div>
    )
};

export default ServerErrorMessage;