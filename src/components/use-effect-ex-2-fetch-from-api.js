import {useEffect, useState} from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({data: '', loading: false});

    useEffect(() => {
        setState({data: '', loading: true});
        fetch(url).then(d => d.text()).then((textRes) => {
            setState({data: textRes, loading: false});
            console.log(textRes);
      });
  }, [url]);

  return state;
};
