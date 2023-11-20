import React,{ useState, useEffect } from 'react'
import Header from '../../Header/Header'
import '../Priority/Priority.css'
import Card from '../../Card/Card'

function User() {
  const [data, setData] = useState([]);
  const separatedData = {
    User1: [],
    User2: [],
    User3: [],
    User4: [],
    User5: []
  };

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error)); 
  }, []);


  data?.tickets?.forEach(item => {
    switch (item.userId) {
      case "usr-1":
        separatedData.User1.push(item);
        break;
      case 'usr-2':
        separatedData.User2.push(item);
        break;
      case "usr-3":
        separatedData.User3.push(item);
        break;
      case "usr-4":
        separatedData.User4.push(item);
        break;
      case "usr-5":
        separatedData.User5.push(item);
        break;
      default:
        break;
    }
  });

  const HeaderData=[
    {
      "icon":<i class="bi bi-record-circle-fill"></i>,
      "name": "Anoop sharma",
      "count":separatedData.User1.length
     },
    {
      "icon": <i class="bi bi-record-circle-fill"></i>,
      "name": "Yogesh",
      "count":separatedData.User2.length
     },{
      "icon": <i class="bi bi-record-circle-fill"></i>,
      "name": "Shankar Kumar",
      "count":separatedData.User3.length
     },{
      "icon":<i class="bi bi-record-circle-fill"></i>,
      "name": "Ramesh",
      "count":separatedData.User4.length
     },{
      "icon": <i class="bi bi-record-circle-fill"></i>,
      "name": "Suresh",
      "count":separatedData.User5.length
     }]


  return (
    <div>
      <Header HeaderData={HeaderData}/>
      <div className='contenar'>
        <div className='priorityContaner'>

        {
        separatedData?.User1.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'>
        {
        separatedData?.User2.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
           </div>
        <div className='priorityContaner'> 
        {
        separatedData?.User3.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'> 
        {
        separatedData?.User4.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        <div className='priorityContaner'>
        {
        separatedData?.User5.map((item, index) => (
          
           <Card item={item} key={index} />
        ))
        }
        </div>
        </div>
      
    </div>
  )
}

export default User
