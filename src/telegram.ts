require('dotenv').config()
import schedule from 'node-schedule'

import axios from 'axios';
import { getData } from './fetchData'
import { log } from 'console';
const filePath = process.cwd() + `/${process.env.FILE_NAME}`;

const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=@${process.env.GROUP_ID}&text=`



async function postMessage() {
    try {

        console.log("Cron Start");

        const data: any = await getData(filePath);

        if (Object.keys(data) && Object.keys(data).length == 2) {

            console.log("Data Found Starting Todays Post :)", data);
            const salutation = `<b>Namaste🙏Today's Question is => </b>
            &parse_mode=HTML&protect_content=true`

            const response0 = await axios.get(url.concat(salutation));
            const question = `<b>Question => </b><i>${data.Question}</i>&parse_mode=HTML&protect_content=true`

            const response1 = await axios.get(url.concat(question));

            const answer = `<b>Answer => </b><i>${data.Answer}</i>&parse_mode=HTML&protect_content=true`;
            const response2 = await axios.get(url.concat(answer));

            const ending = `<b>Thanks for the read 👍</b>&parse_mode=HTML&protect_content=true`;
            const response3= await axios.get(url.concat(ending));

        }

        else {
            console.log("No Data found :(");

        }
        // console.log("url",url);  
        console.log("Cron End");

    } catch (error) {
        console.error(error);
    }
}

// setInterval(() => {
//     // Your cron job logic here
//   }, 1000 * 60 * 60);

//   setInterval(() => {
//     // Your cron job logic here
//   }, 1000 * 60 * 60);

console.log("Waiting for scheduler");


const millisecondsPerHour = 60 * 60 * 1000;
const time = parseInt(`${process.env.CRON_JOB}`) * millisecondsPerHour


setTimeout(() => {
    postMessage(); 
    console.log("Scheduler Run Complete =>",new Date());
}, time)



// const job = schedule.scheduleJob(`${process.env.CRON_JOB}`, postMessage);

