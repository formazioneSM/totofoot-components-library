# Totofoot components library

Questa libreria è utilizzata per la realizzazione degli applicativi totofoot in ambito SISAL.

## Installation

Per installarla basta eseguire il comando [npm](https://pip.pypa.io/en/stable/).

```bash
npm install totofoot-library
```

## Usage

```jsx
import {Button, Input} from 'totofoot-library'

function App() {

  return (
    <>
     <Input 
       label='label'
       placeholder='scrivi qualcosa'
       onChange={console.log}> 
     </Input>
     <Button 
       text='ciao'>
     </Button>
    </>
  )
}
export default App
```

## Components

### Button
---
| Props    | Type |
| -------- | ------- |
| text?  | string    |
| primary? | boolean     |
| type?    | string    |
| disabled?    | boolean    |
| size?    | string    |
| onClick?    | Function    |

## License

[MIT](https://choosealicense.com/licenses/mit/)