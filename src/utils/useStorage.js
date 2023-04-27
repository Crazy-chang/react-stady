
import { useEffect, useState } from 'react';

function useStorage(key, value, type) {
    const [storedValue, setStoredValue] = useState(key);

    const getStorage = () => {

        switch (type) {
            case 'localStorage':
                localStorage.setItem(key, value);
                break;
            case 'sessionStorage':
                sessionStorage.setItem(key, value);
                break;
        }
        localStorage.setItem(key, value);
        if (value !== storedValue) {
            setStoredValue(value);
        }
    };
    const setStorage = (value) => {
        switch(type){
            case ''
        }
        localStorage.setItem(key, value);
        if (value !== storedValue) {
            setStoredValue(value);
        }
    };

    const removeStorage = () => {
        localStorage.removeItem(key);
    };

    useEffect(() => {
        const storageValue = localStorage.getItem(key);
        if (storageValue) {
            setStoredValue(storageValue);
        }
    }, []);

    return [storedValue, getStorage, setStorage, removeStorage];
}

export default useStorage;
