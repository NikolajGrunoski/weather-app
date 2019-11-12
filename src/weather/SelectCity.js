import React from 'react'
import city from '../../cityList.json'


const SelectCity = (props) => {
    let counter = 0
    let selectOption = []
   
    for (let i = 0; i < city.length; i++) {
        counter += 1
        selectOption.push(<option key={counter} id={city[i].id} onChange={props.saveInput}>{city[i].name},{city[i].country}</option>)
    }
    return (
        <React.Fragment>
            <select>
                <option>Select Your Town</option>
                {selectOption}
            </select>
        </React.Fragment>
    )
}

export default SelectCity