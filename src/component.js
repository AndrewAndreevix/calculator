import React from "react";
import { useState } from "react";
import rates from "./getProp";




export const Pole = () => {
        const [inpVal, setInpVal] = useState('')

        function caclucateMoney() {
            const val1 = document.getElementById('1')
            const val2 = document.getElementById('2')
            const val3 = document.getElementById('3')
            const val4 = document.getElementById('4')
            const val5 = document.getElementById('5')
            const val6 = document.getElementById('6')
            const result = document.getElementById('input1').value

            if((val1.selected && val4.selected) || (val2.selected && val5.selected) || (val3.selected && val6.selected)) {
                setInpVal(result)
            }

            else if (val1.selected && val5.selected) {
                const rate = (Number(rates.usd) / Number(rates.eur))
                setInpVal( (rate * result).toFixed(2) )
            }

            else if (val1.selected && val6.selected) {
                const rate = (Number(rates.usd))
                setInpVal( (rate * result).toFixed(2) )
            }

            else if (val2.selected && val4.selected) {
                const rate = (Number(rates.eur) / Number(rates.usd))
                setInpVal( (rate* result).toFixed(2) )
            }

            else if (val2.selected && val6.selected) {
                const rate = Number(rates.eur) 
                setInpVal( (rate* result).toFixed(2) )
            }

            else if (val3.selected && val4.selected) {
                const rate = 1/ Number(rates.usd) 
                setInpVal( (rate* result).toFixed(2) )
            }

            else if (val3.selected && val5.selected) {
                const rate = 1/ Number(rates.eur) 
                setInpVal( (rate* result).toFixed(2) )
            }

            
        }

    return(
        <>
        <div id="pole1">
            <input id="input1" placeholder={'введите вашу валюту'}/>
            <select id="select1">
                <option id="1">USD</option>
                <option id="2">EUR</option>
                <option id="3">UAH</option>
            </select>
        </div>

        <div id="pole1">
            <input id="input2" readOnly placeholder={'какую валюту хотите? ->'} value={inpVal}/>
            <select id="select2">
                <option id="4">USD</option>
                <option id="5">EUR</option>
                <option id="6">UAH</option>
            </select>
        </div>
        <button id="btn" onClick={caclucateMoney}>Convert</button>
        </>
    );
}