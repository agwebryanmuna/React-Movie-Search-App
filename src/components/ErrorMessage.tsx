import {useEffect, useState} from 'react';

interface ErrorMessageProps {
    message: string;
}

function ErrorMessage({message}:ErrorMessageProps) {
    
    const [visible, setVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timer);
    }, []);
    
    if (!visible) return null;
    
    return (
        <div className='border z-50 border-red-500 rounded-md fixed top-10 right-10 text-red-500 text-xs py-2 px-4'>{message}</div>
    );
}

export default ErrorMessage;
