import useRegistrationStore from "@/store/registerStore";


const ServerErrorMessage: React.FC = () => {
    const {serverResponseGenerateOTP} = useRegistrationStore();
    return (
        <>
        {serverResponseGenerateOTP?.issuccess && (
        <span 
        style={{background:"#184f18", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
        className="text-green-500"> {`Server Succcess Message: ${serverResponseGenerateOTP?.message}`}</span>
        )}  
        {!serverResponseGenerateOTP?.issuccess && (
        <span 
        style={{background:"#ff000030", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
        className="text-red-500">{`Server Error Message:  ${serverResponseGenerateOTP?.message}`}</span>
        )}
        </>
    )
    };

export default ServerErrorMessage;