export function toString(value) {
    return value + ''
}

export default function request(url, options) {
    const defaultOpt = {
        mode: 'cors',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    }
    const opts = Object.assign({}, defaultOpt, options)
    return fetch(url, opts)
        .then(res => {
            if (res.status == 200) {
                return res
            }
            throw new Error(res.statusText);
        })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => err);
}
export function requestCode(url, options) {
    const defaultOpt = {
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const opts = Object.assign({}, defaultOpt, options);
    return fetch(url, opts)
        .then(res => res.status)
}
