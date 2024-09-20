/* eslint-disable react/jsx-key */

import Button from './Button'
import { useState, useEffect } from 'react'

function TestimonialsApp() {

    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState("");

    useEffect(()=> {
      fetch( `https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(data => setItems(data))
    }, [testimonials])
    
    return (
        <div className='container'>
            <h1>Testimonials App</h1>

            <div className='d-flex'>
                <Button btnClass={"btn-success"} text={"Posts"} onClick={() => setTestimonials("Posts")} />
                <Button btnClass={"btn-info"} text={"Users"} onClick={() => setTestimonials("Users")}  />
                <Button btnClass={"btn-danger"} text={"Comments"} onClick={() => setTestimonials("Comments")}  />
            
            </div>

        <h2 className='subtitle text-primary'>{!testimonials ? "Select from above" : testimonials}</h2>
        
        {!items ? null :
        items.map((item)=> {
            return (
                <div className="card card-primary key={item.id} style={{marginTop: 50}}">
                    {item.name && <h2 className='card card-primary'>{item.name}</h2>}
                
                <div className="card-body">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
                    {item.email && (
                    <span className='card-footer'>{item.email}</span>
                    )}
            </div>
            )
       })
}

 </div>
    )}
            

export default TestimonialsApp