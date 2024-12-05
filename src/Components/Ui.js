import React,{useState} from 'react'

export default function Ui(props) {

    const[boxText,setBoxText]=useState(Array(9).fill(null));
    const[turn,setTurn]=useState("X");
    const[lock,setLock]=useState(false);
    const[winner,setWinner]=useState(null);
    const [buttonText, setButtonText] = useState("Reset");

    const handleClick=(index)=>{
            if (boxText[index]) {
                return;
            }

            if(lock)
            {
                return;
            }

            const newBoxText = boxText.slice();
            
            newBoxText[index] = turn;

            setBoxText(newBoxText);
            // console.log(newBoxText);
            if(turn==='X')
            {
                setTurn('O');
            }
            else{
                setTurn('X');
            }

            checkWin(newBoxText);
        }

    const checkWin=(boxData)=>{
        if(boxData[0]===boxData[1] && boxData[1]===boxData[2] && boxData[2]!==null)
        {
            won(boxData[0]); 
        }
        else if(boxData[3]===boxData[4] && boxData[4]===boxData[5] && boxData[5]!==null)
        {
            won(boxData[3]); 
        }
        else if(boxData[6]===boxData[7] && boxData[7]===boxData[8] && boxData[8]!==null)
        {
            won(boxData[6]); 
        }
        else if(boxData[0]===boxData[3] && boxData[3]===boxData[6] && boxData[6]!==null)
        {
            won(boxData[0]); 
        }
        else if(boxData[1]===boxData[4] && boxData[4]===boxData[7] && boxData[7]!==null)
        {
            won(boxData[1]); 
        }
        else if(boxData[2]===boxData[5] && boxData[5]===boxData[8] && boxData[8]!==null)
        {
            won(boxData[2]); 
        }
        else if(boxData[0]===boxData[4] && boxData[4]===boxData[8] && boxData[8]!==null)
        {
            won(boxData[0]); 
        }
        else if(boxData[2]===boxData[4] && boxData[4]===boxData[6] && boxData[6]!==null)
        {
            won(boxData[2]); 
        }

        else if(boxData.every((box) => box !== null)) {
            setLock(true); // Lock the game on a draw
            setWinner("It's a Draw");
            setButtonText("Start new game");
        }

    }

    const won=(winner)=>{
        setLock(true);
        setWinner(`Congratulation The Winner is ${winner}`);
        setButtonText("Start new game");
    }

    const resetGame = () => {
        setBoxText(Array(9).fill(null)); // Reset the board
        setTurn("X"); // Reset turn to X
        setLock(false); // Unlock the game
        setWinner(null); // Clear winner
        setButtonText("Reset");
    };

  return (
    <>
    <div className="Container">
        <h1 className="gameName">Tic Tac Toe</h1>
        <h1 className='winText'>{winner}</h1>
        <div className="game">
            <div className="boxes" >
                <div className='box' onClick={()=>{handleClick(0)}}>{boxText[0]}</div>
                <div className='box' onClick={()=>{handleClick(1)}}>{boxText[1]}</div>
                <div className='box' onClick={()=>{handleClick(2)}}>{boxText[2]}</div>
                <div className='box' onClick={()=>{handleClick(3)}}>{boxText[3]}</div>
                <div className='box' onClick={()=>{handleClick(4)}}>{boxText[4]}</div>
                <div className='box' onClick={()=>{handleClick(5)}}>{boxText[5]}</div>
                <div className='box' onClick={()=>{handleClick(6)}}>{boxText[6]}</div>
                <div className='box' onClick={()=>{handleClick(7)}}>{boxText[7]}</div>
                <div className='box' onClick={()=>{handleClick(8)}}>{boxText[8]}</div>
            </div>
        </div>  
        <div className="startBtnContainer">
            <button  id='startBtn' onClick={resetGame}>{buttonText}</button>    
        </div>
    </div>
    </>
  )
}
