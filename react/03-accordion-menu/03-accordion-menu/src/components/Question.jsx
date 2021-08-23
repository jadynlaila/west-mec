import React, { useState, useEffect } from 'react'

const Question = (title, info) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
    )
}

export default Question

