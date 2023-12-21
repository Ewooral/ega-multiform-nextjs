import useRegistrationStore from "@/store/registerStore";
import { CustomErrorToaster, CustomSuccessToaster } from "./CustomComponents";

const ServerErrorMessage: React.FC = () => {
  const {
    serverResponseGenerateOTP,
    currentStep,
    showToaster,
    setShowToaster,
  } = useRegistrationStore();

  return (
    <div>
      {(currentStep === 0 ||
        currentStep === 1 ||
        currentStep === 2 ||
        currentStep === 3) &&
        serverResponseGenerateOTP?.issuccess && (
          // @ts-ignore
          <CustomSuccessToaster
            show={showToaster}
            // @ts-ignore
            setShow={setShowToaster}
            message={serverResponseGenerateOTP?.message}
          />
        )}
      {(currentStep === 0 ||
        currentStep === 1 ||
        currentStep === 2 ||
        currentStep === 3) &&
        !serverResponseGenerateOTP?.issuccess && (
          <CustomErrorToaster
            show={showToaster}
            // @ts-ignore
            setShow={setShowToaster}
            // @ts-ignore
            message={serverResponseGenerateOTP?.message}
          />
        )}
    </div>
  );
};

export default ServerErrorMessage;
