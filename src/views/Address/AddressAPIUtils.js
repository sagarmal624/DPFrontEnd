import {ACCESS_TOKEN, API_BASE_URL} from '../../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        console.log(ACCESS_TOKEN)
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};


export function createAddress(addressInfoData) {
    return request({
        url: API_BASE_URL + '/address/save',
        method: 'POST',
        body: JSON.stringify(addressInfoData)
    });
}