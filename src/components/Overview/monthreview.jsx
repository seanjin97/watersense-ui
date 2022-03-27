import React,{useState,useEffect} from "react";
import { Container } from "react-bootstrap";
import '../Overview/style.css';

const monthreview = () => {
  return (
    <div>
        <h1>Monthly Overview</h1>
        <br></br>
        <h3>Month of March</h3>
        <Container>
        <Container className = 'monthContainer' maxWidth="sm">
            <p>Total Water Consumption for Month</p>
            <p>Usage /Goal Set</p>
            <p>Exceeded/Not exceeded</p>
        </Container>

        <Container className = 'dayContainer' maxWidth="sm">
            <p>Total Days Exceeded</p>
            <p>Days Exceeded /Days in Month</p>
        </Container>
        </Container>
   

    </div>
  )
}

export default monthreview