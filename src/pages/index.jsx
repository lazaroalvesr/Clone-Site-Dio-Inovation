// useMemo = referencia em variaveis(const, var, let)
// useCallback = referencia de função
// useState = declara um variável state, maneira de usar as mesmas capacidades que o
// this.state tem em uma classe 
// useEffect = usando ele você diz ao React que o componente precisa fazer algo
// apenas depois da renderizção.


import { useState, useEffect, useMemo, useCallback } from 'react';

const teste = () => {

const [name, setName] = useState();

const handleChangeName = useCallback (() =>{
    setName(prev => prev ==='Alves' ? 'LAZARO' : 'Alves')
})

const calculo = useMemo(() => {console.log('calculou') return 10 + 29},

[]);



console.log('renderizou', calculo);

  return (
    <div>
        <p>
            {name}
        </p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export { teste }