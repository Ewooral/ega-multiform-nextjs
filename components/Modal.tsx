type ModalTypes = {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
  };
  
  const Modal = ({ isOpen, closeModal, children }: ModalTypes) => {
    
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
  
  export default Modal;

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