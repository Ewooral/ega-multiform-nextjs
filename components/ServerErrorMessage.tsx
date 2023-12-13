import useRegistrationStore from "@/store/registerStore";


const ServerErrorMessage: React.FC = () => {
    const {serverResponseGenerateOTP} = useRegistrationStore();
    return (
        <>
        {serverResponseGenerateOTP?.issuccess && (
        <span 
        style={{background:"#184f18", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
        className="text-green-500"> {serverResponseGenerateOTP?.message}</span>
        )}  
        {!serverResponseGenerateOTP?.issuccess && (
        <span 
        style={{background:"#461e40", padding: "4px", borderRadius: "5px", fontSize:"12px" }}
        className="text-red-500"> {serverResponseGenerateOTP?.message}</span>
        )}
        </>
    )
    };

export default ServerErrorMessage;