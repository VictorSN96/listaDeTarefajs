import { useState } from 'react';
import * as Component from './App.styles';
import { Tarefa } from './types/tarefa';
import { ListItem } from './components/Listitem';
import { AddArea } from './components/AddArea';



const App = () => {
    const [list, setList] = useState<Tarefa[]>([ ]);

  const handleAddTask = (taskName: string) => {
    let newlist = [...list];
    newlist.push({
      id: list.length + 1,
      name:taskName,
      done: false
    });
    setList(newlist);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
      <Component.Container>
        <Component.Area>
          <Component.Header>Lista de Tarefas</Component.Header>

            {/* Adicionar nova tarefa */}
            <AddArea onEnter={handleAddTask} />


            {/* Lista de tarefas */}
            {list.map((tarefa, index)=>(
                <ListItem 
                key={index} 
                item= {tarefa}
                onChange={handleTaskChange}
                /> 
            ))}

        </Component.Area>
      </Component.Container>
  );
}



export default App;