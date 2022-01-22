import React,{Fragment, useContext} from "react"
import {DUMMYDATA} from "./Items"
import NasaCards from "./NasaCards"
import MyContext from "../../Context/store"

const NasaItems = (props) => {

    const ctx = useContext(MyContext)

const items = props.response.map((items) => <NasaCards
key ={items.id}
id ={items.id}
title ={items.title}
Image ={items.img}
date = {items.date}
like={items.like}



/>)
    return ( <Fragment>
        {items}
    </Fragment>);
}
 
export default NasaItems;