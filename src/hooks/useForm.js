import { useState } from 'react'

const useForm = (value = {}) => {
    const [inputvalue, setInputValue] = useState(value)

    const handleChange = (e) => {
        setInputValue({
            ...inputvalue,
            [e.target.name] : e.target.value
        })
    }

    return [inputvalue, handleChange]
}

export default useForm
