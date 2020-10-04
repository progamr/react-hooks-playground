import React, {useEffect} from 'react';

export const Message = () => {

    // Use this as a replacement for componentDidMount and componentWillUnmount
    useEffect(() => {
        console.log('message rendered');

        // clean up function that is called once the component unmount
        return () => {
            console.log('Unmount');
        };
    }, []);

    return <div>some message</div>
};
