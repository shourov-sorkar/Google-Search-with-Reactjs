import React from 'react'
import { Link } from 'react-router-dom'


const Data = ({ data }) => {
    return (
        <div className="col-md-6">
            <Link className="text-dark small" to={data.formattedUrl}>{data.formattedUrl}</Link>
            <Link to={data.formattedUrl}><h4>{data.title}</h4></Link>
            <p>{data.snippet}</p>
        </div>
    )
}


export default Data;
