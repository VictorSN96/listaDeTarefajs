import * as C from './styles';  
import { Tarefa} from '../../types/tarefa';
import { useState } from 'react';


type Props = {
    item: Tarefa
    onChange: (id: number, done: boolean) => void
}


export const ListItem = ({ item }: Props ) =>{
    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <C.Container done= {isChecked}>
            <input 
                type="checkbox" 
                checked ={isChecked}
                onChange = {e => setIsChecked(e.target.checked)} 
            />
            <label>{item.name}</label>  
        </C.Container>
    )
}