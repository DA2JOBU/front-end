import axios, { AxiosPromise } from "axios";
import { searchElement } from "src/types/searchType";

export const registerPlace = (data: searchElement) => {
    
}

//등록된 리스트 가져오기
export const getRegisterList = async() => {
    return await axios.get(process.env.NEXT_PUBLIC_SERVER_URI + '/place/reviewed',)
        .then(function (res) { console.log(res) });
}