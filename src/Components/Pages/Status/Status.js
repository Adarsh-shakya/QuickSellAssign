import React,{ useState, useEffect } from 'react'
import Header from '../../Header/Header'
import '../Priority/Priority.css'
import Card from '../../Card/Card'

function Status() {
    const [data, setData] = useState([]);
  const separatedData = {
    Status1: [],
    Status2: [],
    Status3: [],
    Status4: [],
    Status5: []
  };

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error)); 
  }, []);

  data?.tickets?.forEach(item => {
    switch (item.status) {
      case "Backlog":
        separatedData.Status1.push(item);
        break;
      case 'Todo':
        separatedData.Status2.push(item);
        break;
      case "In progress":
        separatedData.Status3.push(item);
        break;
      case "Done":
        separatedData.Status4.push(item);
        break;
      case "Canceled":
        separatedData.Status5.push(item);
        break;
      default:
        break;
    }
  });

    const HeaderData=[
        {
          "icon": <i class="bi bi-check2-circle"></i>,
          "name": "backlog",
          "count":separatedData.Status1.length
         },
        {
          "icon": <i class="bi bi-exclamation-square-fill"></i>,
          "name": "Todo",
          "count":separatedData.Status2.length
         },{
          "icon": <i class="bi bi-dash-circle-dotted"></i>,
          "name": "In progress",
          "count":separatedData.Status3.length
         },{
          "icon": <i class="bi bi-check-circle-fill"></i>,
          "name": "Done",
          "count":separatedData.Status4.length
         },{
          "icon": <i class="bi bi-x-circle"></i>,
          "name": "Canceled",
          "count":separatedData.Status5.length
         }]

        

  return (
    <div>
      <Header HeaderData={HeaderData}/>
      <div className='contenar'>
        <div className='priorityContaner'>

        {
        separatedData?.Status1.map((item, index) => (
          
           <Card item={item}  key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'>
        {
        separatedData?.Status2.map((item, index) => (
          
           <Card item={item}  key={index} />
        ))
        }
           </div>
        <div className='priorityContaner'> 
        {
        separatedData?.Status3.map((item, index) => (
          
           <Card item={item}  key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'> 
        {
        separatedData?.Status4.map((item, index) => (
          
           <Card item={item}  key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'>
        {
        separatedData?.Status5.map((item, index) => (
          
           <Card item={item}  key={index} />
        ))
        }
        </div>
        </div>

    </div>
  )
}

export default Status
