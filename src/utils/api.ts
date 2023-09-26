import axios from 'axios'

const BASE_URL: string = 'https://api.themoviedb.org/3/'

const TOKEN: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVhN2ZlZmRiNmNlZmQyYjAyMDAxNzQ3MzY4MDkwNSIsInN1YiI6IjY1MDhjODIwODI2MWVlMDBjNWZlMDY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5dHDdPUrNJ32964rd49iCc9H1qXYxcs3yygwg0SGz70'

const headers = {
    Authorization: 'Bearer ' + TOKEN,
}

export const fetchData = async (url: string, params?: string | number) => {
    try {
        const data = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}