import React, { useEffect, useState } from 'react'
import Fooddata from './FoodItem';
import Form from 'react-bootstrap/Form'
import Carts from './Carts';
import './style.css'
import Set from './Set';

export const Search = () => {
  const [fdata, setFdata] = useState(Fooddata);

  const [copydata, setCopyData] = useState([]);
  //console.log(copydata);

  const changeData = (e) => {

    let getchangedata = e.toLowerCase();
    setCopyData(fdata);
    if (getchangedata == "") {
      setCopyData(fdata);
    } else {
      let storedata = copydata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata)
    }
  }

  const zomatologo = 'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'

  useEffect(() => {

    setTimeout(() => {
      setCopyData(Fooddata);

    }, 1000);

  }, [])

  return (
    <>
      <div className='container d-flex justify-content-between align-items-center'>
        <img src={zomatologo} alt='' style={{ position: 'relative', left: '2%', width: "8rem", cursor: 'pointer' }} />
        <h2 style={{ color: "#1b1464", cursor: 'pointer' }} className='mt-3'>Search Filter App</h2>
      </div>

      <Form className='justify-content-center d-flex mt-3'>
        <Form.Group className=' mx-2 col-lg-4' controlId="formBasicEmail">
          <Form.Control type="text"
            onChange={(e) => changeData(e.target.value)}
            placeholder="Search restorents" className='' />
        </Form.Group>

        <button className='btn text-light col-lg-1' style={{ backgroundColor: "#ed4c67", }}>Submit</button>
      </Form>

      <section className='items_section mt-4 container'>
        <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Ahemdabad Open now</h2>

        <div className='row mt-2 d-flex justify-content-around align-items-center'>
          {copydata && copydata.length ? <Carts data={copydata} /> : "your cart is empty"}

        </div>
      </section>
      <Set/>
    </>
  )
}

export default Search