

import React, {useState} from "react"
import {Container, Current, Previous, Screen, Button} from "./Styledcomponents"

function Calculator() {
    const [current, setCurrent] = useState('')
    const [previous, setPrevious] = useState('')
    const [operation, setOperation] = useState('')

    const clearAll = () => {
        setCurrent('')
        setPrevious('')
    }
    const backArrow = () => {
        console.log(current)
        setCurrent(p => p.slice(0, -1))
    }
    const clearCurrent = () => {
        setCurrent('')
    }



    const currentHandler = (e) => {
        const data = e.target.getAttribute('data')
        if (data === '.' && current.includes('.')) return;
        setCurrent(current + data)
    }

    const operationClickHandler = (e) => {
        if (!current) return
        const operationSign = e.target.getAttribute('data')
        setOperation(operationSign)
        // if (previous[previous.length-1] === operationSign) return;

        if (!previous) {
            setPrevious(current + operationSign)
            
        } else {
            const result = calculate(operationSign)
            setPrevious(result)
        }

        setCurrent('')
    }

    const calculate = (operationSign) => {
        if (!current) return
        if (operationSign === '+') {
            let result = Number.parseFloat(previous) + Number.parseFloat(current)
            setCurrent('')
            return result
        }
    }

    const equalHandler = () => {
        const result = calculate(operation)
        setCurrent(result)
    }

    return(
        <Container>
            <Screen>
                <Previous>{previous ? previous : <span>&nbsp;</span>}</Previous>
                <Current>{current ? current : <span>&nbsp;</span>}</Current>
            </Screen>

            <Button onClick={backArrow}>   ←       </Button>
            <Button onClick={clearCurrent}>    CE      </Button>
            <Button onClick={clearAll}>    C       </Button>
            <Button>            </Button>
            <Button >   &radic;      </Button>
            <Button onClick={currentHandler} data={'7'}>     7       </Button>
            <Button onClick={currentHandler} data={'8'}>     8       </Button>
            <Button onClick={currentHandler} data={'9'} >    9       </Button>
            <Button>    /    </Button>
            <Button>    %     </Button>
   

            <Button onClick={currentHandler} data={'4'} >     4       </Button>
            <Button onClick={currentHandler} data={'5'}>      5      </Button>
            <Button onClick={currentHandler} data={'6'}>      6      </Button>
            <Button>      *      </Button>
            <Button>     1/x       </Button>


            <Button onClick={currentHandler} data={'1'}>      1      </Button>
            <Button onClick={currentHandler} data={'2'}>      2      </Button>
            <Button onClick={currentHandler} data={'3'}>      3       </Button>
            <Button>      -      </Button>


            <Button gridSpan={2}>      0     </Button>
            <Button onClick={currentHandler} data={'.'}>      .      </Button>
            <Button data={"+"} onClick={operationClickHandler}>      +      </Button>
            <Button doubleRow onClick={equalHandler}>      =       </Button>
        </Container>
    
    )
}

export default Calculator


