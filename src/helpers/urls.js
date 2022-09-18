
const API_ROOT = 'https://jsonplaceholder.typicode.com/users' ;


export const APIUrls = { 
    fetchContacts : (page =1 , limit =15) =>  `${API_ROOT}?page=${page}&limit=${limit}`,
    createContact : ()=> API_ROOT ,
    editContact:() =>API_ROOT,
    deleteContact:()=>API_ROOT
}