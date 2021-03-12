import axios from "axios";

export const getPlants = () => {
    return axios.get("http://localhost:3333/plants")
    .then(res => {
        return(res.data);
    })
    .catch(err => {
      console.log(err);
    })
}