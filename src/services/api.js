import axios from "axios";

const api_base_url = "base_url";


//endpoints
const ENDPOINTS = {
    foruploadexcel : "/foruploadexcel/"
};

// function to get data 

export const fetchData = async () => {
    try {
        const response =  await axios.get('${api_base_url}${foruploadexcel}')
        return response.data;
    } catch(error){
        console.error("Error fetch excel data: ",error);
        return [];
    }
    
};

// Function to post (upload excel file)

export const uploadExcel = async(file) => {

    try {
        
    } catch(e){

    }
};