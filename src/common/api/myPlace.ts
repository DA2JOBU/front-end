//가보고 싶은 곳 api
export const wantPlaceList = async () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + 'want-place/my/list';
    return await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem('jwtToken'),
        },
    })
        .then((res) => res.json())
        .then((res) => res);
};

//가본 곳 api
export const wentPlaceList = async () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + 'place-review/my/list';
    return await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem('jwtToken'),
        },
    })
        .then((res) => res.json())
        .then((res) => res);
}