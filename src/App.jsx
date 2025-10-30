/*
This will serve as the front page to the application and
import different files as needed to build the UI of the application

*/
export function MyButton() {
    return <button>I'm a button</button>;
}

//general init commit -> just as a heads up this is my first time working with this language
export default function MyApp(){
    return(
        <div>
        <h1> Welcome to Flowcalls! A talking app</h1>
        <MyButton />
        </div>
    );
}