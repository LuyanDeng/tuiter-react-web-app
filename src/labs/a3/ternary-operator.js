function TernaryOperator(){
    let loggedIn = true;
    if(loggedIn){
        console.log('Welcome');
    }else {
        console.log('Please login');
    }
    return(
        <div>
        <h2>Logged In</h2>
            {loggedIn ? <p>Welcome</p> : <p> Please login</p>}
        </div>

    );
}
export default TernaryOperator;