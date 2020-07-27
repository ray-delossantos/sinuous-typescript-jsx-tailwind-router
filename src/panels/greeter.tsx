import { h } from 'sinuous';

export interface GreeterProps {
  whomToGreet: string;
  greeting?: string | (() => string);
}

export function Greeter(props: GreeterProps) {
  let g = props.greeting;

  let greeting = 'Hello';

  if (typeof g === 'string') {
    greeting = g;
  } else if (g) {
    greeting = g();
  }

  return (
    <div class="m-auto" onClick={() => console.log(99)}>
      {greeting}, {props.whomToGreet}
    </div>
  );
}
