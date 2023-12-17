import create from 'zustand';
import { useForm, SubmitHandler, FormState } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import workerStore from "@/store/workerStore";
import {WorkersManagementServiceClient} from "@/proto/generated/WorkersServiceClientPb"
import {CreateWorkerRequest} from "@/proto/generated/workers_pb"
require('dotenv').config()


// Define Zod schema for worker data
const workerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phoneNumber: z.string(),
  department: z.string(),
  jobTitle: z.string(),
});

type workerType = z.infer<typeof workerSchema>;

const CreateWorker = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<workerType>({
    resolver: zodResolver(workerSchema),
  });
  const router = useRouter();
  
  const { worker, setWorker, setError } = workerStore();

  const onSubmit = async (data: workerType) => {
    const client = new WorkersManagementServiceClient("http://localhost:8080");

    const request = new CreateWorkerRequest();
    request.setName(data.name)
    request.setEmail(data.email)
    request.setPhoneNumber(data.phoneNumber)
    request.setDepartment(data.department)
    request.setJobTitle(data.jobTitle)

    const jwt_token = process.env.REACT_APP_JWT_TOKEN
    const metadata = {'authorization': 'Bearer ' + jwt_token};
    console.log("JWT: " ,metadata)
    
    try {
        const response = await client.createWorker(request, {})
        console.log("RESPONSE::::", response.toObject())
        console.log("RES::::", response.getMessage())
    } catch (error: any) {
        console.log("ERROR::::", error.message)
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div>
      <input
        {...register('name')}
        placeholder="Name"
        value={worker.name}
        onChange={(e) => setWorker({ ...worker, name: e.target.value })}
        className="w-full p-2 bg-transparent border border-gray-300 rounded-md"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </div>
    <div>
      <input
        {...register('email')}
        placeholder="Email"
        type='email'
        value={worker.email}
        onChange={(e) => setWorker({ ...worker, email: e.target.value })}
        className="w-full p-2 bg-transparent border border-gray-300 rounded-md"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
    <div>
      <input
        {...register('phoneNumber')}
        placeholder="Phone Number"
        type='number'
        value={worker.phoneNumber}
        onChange={(e) => setWorker({ ...worker, phoneNumber: e.target.value })}
        className="w-full p-2 bg-transparent border border-gray-300 rounded-md"
      />
    </div>
    <div>
      <input
        {...register('department')}
        placeholder="Department"
        value={worker.department}
        onChange={(e) => setWorker({ ...worker, department: e.target.value })}
        className="w-full p-2 bg-transparent border border-gray-300 rounded-md"
      />
      {errors.department && <p className="text-red-500">{errors.department.message}</p>}
    </div>
    <div>
      <input
        {...register('jobTitle')}
        placeholder="Job Title"
        value={worker.jobTitle}
        onChange={(e) => setWorker({ ...worker, jobTitle: e.target.value })}
        className="w-full p-2 bg-transparent border border-gray-300 rounded-md"
      />
      {errors.jobTitle && <p className="text-red-500">{errors.jobTitle.message}</p>}
    </div>
    <div className="flex items-center justify-between">
    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">Submit</button>
    <button className="px-4 py-2 text-white bg-blue-500 rounded-md">reset</button>
    </div>
  </form>
  );
};

export default CreateWorker;
