// import axios from 'axios';


// export const axiosCallFunc = (url) => {
//     return axios.get(url, {
//         headers: {
//             "user-key": "7a77149c434216ebc2ae733a22ab3839",
//         },
//     })
// }



export const locFilter = (data) => {
    let dataStoreRest = [];

    const localitySetObj = (key, value) => {
        if (!(key in dataStoreRest)) {
            dataStoreRest[key] = [value];
        }
        else {
            dataStoreRest[key] = [...dataStoreRest[key], value];
        }
    }

    data.forEach(a => {
        let loc = (a.restaurant.location.locality).split(', ');
        for (let i of loc) {
            localitySetObj(i, a);
        }
    });

    return dataStoreRest;
}