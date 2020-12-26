import axios from("axios");

const ENDPOİNT ="https://jsonplaceholder.typicode.com";

async function getData(number){
    try {

        const {data:users} = await axios.get(`${ENDPOİNT}/users/${number}`);

        const {data:posts} = await axios.get(`${ENDPOİNT}/posts?userId=${number}`);
        return{data:users,data:posts};
        
    } catch (e) {
        console.log(e);
    }
}
module.exports= getData;