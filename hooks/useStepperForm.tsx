import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { registrationSchema } from '@/lib/StepperFormValidation'

export const useStepperForm = () => {
    const FormMethods = useForm({
        mode: 'onChange',
        resolver: zodResolver(registrationSchema)
    })
    return FormMethods;
}