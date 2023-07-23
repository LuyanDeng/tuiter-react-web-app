function Destructing() {
    const person = {name: "Jhon", age: 25};
    //Destructures the person object to create individual variables name and age.
    // After this line, name will have the value "John", and age will have the value 25.
    //how values can be easily extracted from objects and arrays into separate variables.
    const {name, age} = person;
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers;
    return(
        <div>
            <h2>Destructing</h2>
            <h3>Object Destructing</h3>
            const &#123; name,age &#125; = &#123; name: "John", age: 25 &#125; <br /><br/>
            name = {name}<br/>
            age = {age}<br/>
            <h3>Array Destructing</h3>
            const [first, second, third] = ["one","two","three"]<br /><br/>
            first = {first}<br />
            second = {second}<br />
            third = {third}<br />



        </div>
    );
}
export default Destructing;