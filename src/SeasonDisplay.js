import React from 'react'

const seasonConfig = {
    summer: {
        text: 'Let go to the beach',
        iconName: 'sun'
    },
    Winter: {
        text: 'It is chilly',
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
       return lat > 0 ? 'summer': 'Winter'
    } else{
        return lat > 0 ? 'Winter' : 'summer'
    }

}

const SeasonDisplay = (props) => {
   
    const Season = getSeason(props.lat, new Date().getMonth())
    console.log(Season)
    const { text, iconName }= seasonConfig[Season];

    return (
        <div>
        <i className={`${iconName} icon`}/>
        <h1>{text}</h1> 
        <i className={`${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay;