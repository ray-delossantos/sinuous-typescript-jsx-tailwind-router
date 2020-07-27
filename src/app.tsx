import { h } from 'sinuous';
import { add, resolve, activate } from './router';

import './styles.css'


(async () => {


  add('/hello/{name}/', async (name) => {
    const { Greeter } = await import('./greeter')
    return(<Greeter greeting="Hello" whomToGreet={name} />)
  })

  add('/hello/', async () => {
    const { Greeter } = await import('./greeter')
    return(<Greeter greeting="Hello" whomToGreet="John" />)
  })

  document
    .body
    .appendChild(
      <main class="flex h-screen">
        {resolve()}
      </main>);

  activate()

})();




