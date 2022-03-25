import {useEffect } from "react";
import axios from "axios";

export default function useApplicationData(state, setState) {

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/users'),
      axios.get('http://localhost:8001/api/buildings')
    ]).then((all) => {
      setState(prev => ({...prev, users: all[0].data, buildings: all[1].data}));
    });
}, [])

return {useEffect};
};


