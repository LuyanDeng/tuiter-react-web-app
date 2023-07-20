import {type} from "@testing-library/user-event/dist/type";

function BooleanVariables(){
    let true1 = true;
    let false1 = false;
    let false2 = false;
    let true2 = true || false;
    let true3=!false;
    // initialized numberVariable
    let numberVariable = 123;
    let floatingPointNumver = 321.99;
    let true4=numberVariable ===123;
    let true5 = floatingPointNumver !== 321.432;
    let false3 = numberVariable < 100;
    let sortaTrue = '1' == 1;
    let notTrue = '1 '===1 ;


    return(
        <div>
            true1 ={true1+""}<br/>
            false1 = {false1 +"" }<br/>
            false2 = {false2 +""}<br/>
            true2 ={true2+""}<br/>
            true3 = {true3 +""}<br/>
            true4 ={true4+""}<br/>
            true5 = {true5 +""}<br/>
            false3 ={false3 +""}<br/>
            sortaTrue ={sortaTrue+""}<br/>
            notTrue = {notTrue+""}<br/>

        </div>



    );
}
export default BooleanVariables;
