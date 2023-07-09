require('dotenv').config()


import axios from 'axios';
import {getData} from './fetchData'
const filePath = __dirname + `\\${process.env.FILE_NAME}`;
const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=@${process.env.GROUP_ID}&text=`



async function postMessage() {
    try {

        const data:any = await getData(filePath);
        if(Object.keys(data) && Object.keys(data).length ==2)
        {

        console.log("Data Found Starting Todays Post :)", data);
        const salutation = `<b>Namaste🙏Today's Question is => </b>
        &parse_mode=HTML&protect_content=true`

        const response0 = await axios.get(url.concat(salutation));
        console.log(response0);
        const question = `<b>Question => </b><i>${data.Question}</i>&parse_mode=HTML&protect_content=true`
        
        const response1 = await axios.get(url.concat(question));
        console.log(response1);

        const answer = `<b>Answer => </b><i>${data.Answer}</i>&parse_mode=HTML&protect_content=true`;
        const response2 = await axios.get(url.concat(answer));
        console.log(response2);


        const ending = `<b>Thanks for the read 👍</b>&parse_mode=HTML&protect_content=true`;
        const response3= await axios.get(url.concat(ending));
        console.log(response3);

        }

        else{
            console.log("No Data found :(");
            
        }
        // console.log("url",url);        
    } catch (error) {
        console.error(error);
    }
}

postMessage();