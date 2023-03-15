function App(){
    const [values,setValues] = React.useState("0");
    const  [currentNum, setCurrentNum] = React.useState("");
    
    function calculate(){
        
        const Arr = values.split(" ").join("");
        var filtered = Arr.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');

        let answer = eval(filtered).toPrecision(10);
        
        setValues(eval(answer));
        setCurrentNum("=");
    }
    const operations =(event)=>{
       
        if(/[/+*-]/.test(event.target.value)){ 

            setValues(values+" "+event.target.value+" ");
            setCurrentNum(""); 
        }
    }
    const handleNumbers = (event)=>{
       
        if((event.target.value).match(/[1-9]/)){
            if(values =="0"){
                setValues(event.target.value);
                setCurrentNum(event.target.value);
            }
            else if(currentNum == "="){
                setValues(event.target.value);
                setCurrentNum(event.target.value);
            }
            else{
                setValues(values + event.target.value);
                setCurrentNum(currentNum  + event.target.value);
            }  
        }
    }
    const handleZero =(event)=>{
        
        if(event.target.value == "0"){
            if((currentNum.slice(0,1) !="")  ){
                setValues(values+event.target.value);
                setCurrentNum(currentNum  + event.target.value); 
            }
        }
    }
    const handleDecimal =(event)=>{

        if(event.target.value == "."){
            if(!(/[.]/.test(currentNum))){
                setValues(values+event.target.value);
                setCurrentNum(currentNum  + event.target.value);
                
            } 
        }
    }
    function clear(){
        setValues("0");
        setCurrentNum("");
    }

    return(
        <div className="container-fluid">
            <div className="wrapper">
                <h3>Javascript calculator</h3>
                
                <div className="inner-wrapper">
                    <div id="display" ><b>{values}</b></div>

                        <button className="btn btn-primary" id="clear" value="AC" onClick={clear}>AC</button>
                        <button className="btn btn-primary" id="divide" value="/" onClick={operations}>/</button>
                        <button className="btn btn-primary" id="multiply" value="*" onClick={operations}>*</button>
                    
                        <button className="btn btn-primary" id="seven" value="7" onClick={handleNumbers}>7</button>
                        <button className="btn btn-primary" id="eight" value="8" onClick={handleNumbers}>8</button>
                        <button className="btn btn-primary" id="nine" value="9" onClick={handleNumbers}>9</button>
                        <button className="btn btn-primary" id="subtract" value="-" onClick={operations}>-</button>
                    
                        <button className="btn btn-primary" id="four" value="4" onClick={handleNumbers}>4</button>
                        <button className="btn btn-primary" id="five" value="5" onClick={handleNumbers}>5</button>
                        <button className="btn btn-primary" id="six" value="6" onClick={handleNumbers}>6</button>
                        <button className="btn btn-primary" id="add" value="+" onClick={operations}>+</button>
                    
                        <button className="btn btn-primary" id="one" value="1" onClick={handleNumbers}>1</button>
                        <button className="btn btn-primary" id="two" value="2" onClick={handleNumbers}>2</button>
                        <button className="btn btn-primary" id="three" value="3" onClick={handleNumbers}>3</button>
                    
                        <button className="btn btn-primary" id="zero" value="0" onClick={handleZero}>0</button>
                        <button className="btn btn-primary" id="decimal" value="." onClick={handleDecimal}>.</button>

                        <button className="btn btn-primary" id="equals" value="=" onClick={calculate}>=</button>
                </div>
                <br></br><br></br>
                    <h5>Designed and developed by <span id="author">Tiisetso Mmaboko</span></h5>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App/>);