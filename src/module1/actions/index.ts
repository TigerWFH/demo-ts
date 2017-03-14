export const FETCH_DATA = 'FETCH_DATA';
export const fetchData = (token: string) => {
    console.log('fetchData-->actions');
    return {
        type: FETCH_DATA,
        data: { name: 'monkey', age: 12 }
    }
}