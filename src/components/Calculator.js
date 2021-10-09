

import React from "react"
import {Container, Current, Previous, Screen, Button} from "./Styledcomponents"

function Calculator() {
    return(
        <Container>
            <Screen>
                <Previous>13</Previous>
                <Current>232</Current>
            </Screen>

            <Button >   ←       </Button>
            <Button>    CE      </Button>
            <Button>    C       </Button>
            <Button>            </Button>
            <Button>   &radic;      </Button>
            <Button>    7       </Button>
            <Button>    8       </Button>
            <Button>    9       </Button>
            <Button>    /    </Button>
            <Button>    %     </Button>
   
            <Button>     4       </Button>
            <Button>      5      </Button>
            <Button>      6      </Button>
            <Button>      *      </Button>
            <Button>     1/x       </Button>
            <Button>      1      </Button>
            <Button>      2      </Button>
            <Button>     3       </Button>
            <Button>      -      </Button>
            <Button gridSpan={2}>      0     </Button>
            <Button>      ,      </Button>
            <Button>      +      </Button>
            <Button doubleRow>      =       </Button>
        </Container>
    
    )
}

export default Calculator


