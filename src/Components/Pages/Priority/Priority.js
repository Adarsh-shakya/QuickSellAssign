import React,{ useState, useEffect } from 'react'
import Header from '../../Header/Header'
import './Priority.css'
import Card from '../../Card/Card'

const Priority = () => {
  const [data, setData] = useState([]);
  const separatedData = {
    priority1: [],
    priority2: [],
    priority3: [],
    priority4: [],
    priority5: []
  };
 

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error)); 
  }, []);

    const HeaderData=[
        {
          "icon": <i class="bi bi-three-dots"></i>,
          "name": "No priority",
          "count":2
         },
        {
          "icon": <i class="bi bi-exclamation-square-fill"></i>,
          "name": "Urgent",
          "count":2
         },{
          "icon": <i class="bi bi-reception-4"></i>,
          "name": "High",
          "count":3
         },{
          "icon": <i class="bi bi-reception-3"></i>,
          "name": "Medium",
          "count":2
         },{
          "icon": <i class="bi bi-reception-2"></i>,
          "name": "Low",
          "count":2
         }]
       

       data?.tickets?.forEach(item => {
        switch (item.priority) {
          case 0:
            separatedData.priority1.push(item);
            break;
          case 1:
            separatedData.priority2.push(item);
            break;
          case 2:
            separatedData.priority3.push(item);
            break;
          case 3:
            separatedData.priority4.push(item);
            break;
          case 4:
            separatedData.priority5.push(item);
            break;
          default:
            break;
        }
      });
      
   return (
    <div className='priority'> 
        <Header HeaderData={HeaderData}/>
        <div className='contenar'>
        <div className='priorityContaner'>

        {
        separatedData?.priority1.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'>
        {
        separatedData?.priority2.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
           </div>
        <div className='priorityContaner'> 
        {
        separatedData?.priority3.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'> 
        {
        separatedData?.priority4.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'>
        {
        separatedData?.priority5.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        </div>
      
    </div>
  )
}

export default Priority
