import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware'

interface Worker {
    name: string;
    email: string;
    phoneNumber: string;
    department: string;
    jobTitle: string;
  }
  
  interface WorkerStore {
    worker: Worker;
    errors: Record<string, string>;
    setWorker: (newWorker: Worker) => void;
    setError: (error: Record<string, string>) => void;
  }
  

//@ts-ignore
const workerStore = create<WorkerStore>(devtools(persist((set) => ({
    worker: {
        name: '',
        email: '',
        phoneNumber: '',
        department: '',
        jobTitle: '',
      },
      errors: {},
      setWorker: (newWorker) => set((state) => ({ worker: newWorker }), false, "setWorker"),
      setError: (error) => set(state => ({ errors: error }), false, 'setError'),
    
   
}), {
    name: 'workers-store',
    })));

export default workerStore;