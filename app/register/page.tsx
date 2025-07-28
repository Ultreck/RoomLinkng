import AccountSelection from '@/components/register/AccountSelection'
import RegistrationSidebar from '@/components/register/RegistrationSidebar'
import React from 'react'
import { useForm } from 'react-hook-form'

const RegistrationPage = () => {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            accountType: 'renter',
        },
    });
  return (
    <div className='p-5 flex'>
        <RegistrationSidebar/>
        <AccountSelection/>
    </div>
  )
}
export default RegistrationPage