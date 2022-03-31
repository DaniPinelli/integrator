import { useState } from 'react';

const registrerForm = () => {

    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }

    ]

    const [data, setData] = useState(initialData)

    return (
        <div>

        </div>
    );
}

export default registrerForm;