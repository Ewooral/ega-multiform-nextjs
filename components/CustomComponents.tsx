import { useEffect } from 'react';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

type CustomErrorToasterProps = {
    message: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    };

    type CustomButtonProps = {
        children: React.ReactNode;
    }

    type ModalTypes = {
      isOpen: boolean;
      closeModal: () => void;
      children: React.ReactNode;
    };
    


// TODO: 1. Custom success toaster component
export const  CustomSuccessToaster =  ({ message, show, setShow }: CustomErrorToasterProps) => {
  useEffect(() => {
    if (show) {
      console.log("message: ", message, "show:", show, "setShow:", setShow)
      const timer = setTimeout(() => {
        setShow(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return (
    <AnimatePresence >
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 p-4 m-4 text-white bg-green-700 rounded"
        >
         <span className="mr-6"> <CheckOutlinedIcon /></span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


//TODO: 2. Custom Error Toaster Component

export const  CustomErrorToaster =  ({ message, show, setShow }: CustomErrorToasterProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return (
    <AnimatePresence >
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 p-4 m-4 text-white bg-red-500 rounded"
        >
         <span className="mr-6"> <ErrorOutlineOutlinedIcon /></span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// TODO: 3. Custom Button Component
export const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <div
      {...props}
      className="font-bold text-white custom_button hover:bg-blue-700"
    >
      {children}
    </div>
  );
}


// TODO: 4. Custom Blinking light Component

export  function BlinkingLight() {
  const [isVisible, cycleIsVisible] = useCycle(true, false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      cycleIsVisible();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [cycleIsVisible]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 1 }}
        style={{
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          backgroundColor: 'red',
        }}
      />
    </AnimatePresence>
  );
}


// TODO: 5. Custom Loading Spinner Component
export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark transparent overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Loading spinner */}
      {/* <motion.div
        className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      ></motion.div> */}
      <div className="sk-chase ">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};


// TODO: 6. Custom Modal Component

export const Modal = ({ isOpen, closeModal, children }: ModalTypes) => {
  
  if (!isOpen) {
    return null;
  }

  return (
    <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div 
      // style={{borderRadius: "16% 84% 99% 1% / 30% 0% 100% 70%"}}
      className="max-w-xs max-h-full p-8 m-4 text-center bg-white shadow-lg">
        {children}
        <button
        //@ts-ignore
         style={{borderRadius: "0% 0% 20% 48% / 0% 86% 53% 0% "}}
          className="p-2 mt-4 text-white bg-blue-500 hover:bg-blue-400"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </div>
  );
};

  /**
   * ? EXPLANATION
   * 
   * In this code, the modal is conditionally rendered based on modalIsOpen. 
   * If modalIsOpen is true, the modal is rendered. Otherwise, it's not 
   * rendered. The content of the modal is determined by modalContent. 
   * The "Close Modal" button in the modal calls closeModal when clicked, 
   * which hides the modal.
   * 
   * 
   * 
   * ? USAGE
   * * First, create a state variable for the modal's visibility and content
   * * Then, create a function to open the modal with specific content
   * * Now, you can use these functions to open the modal with different content from different parts
   * * of your application. For example:
   * 
   * function YourComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={modalIsOpen} closeModal={closeModal}>
        <div>Hello, world!</div>
      </Modal>
    </div>
  );
}
   * 
   * 
   */


  // TODO: 7. Custom Static Light Component
export const StaticLight = () => {
  return (
    <div
      style={{
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: 'green',
      }}
    />
  );
};