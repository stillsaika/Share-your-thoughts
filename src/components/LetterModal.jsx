



const LetterModal = ({isActive,handleModalClose, inputRef, saveClicked,val,setVal,handleChangeLetterValue,id}) => {
    // const [val, setVal] = useState('');

    return (
        <div>
            <div className ={`modal modal${isActive?"-open":"-close"}`} id = "modal">
                <div className = "modal-header">
                <div className="title"> Leave a note </div>
                <button className="close-button" onClick={()=>handleModalClose(id)}>&times;</button>
                </div>
                <textarea className="textarea" value={val} 
                // onChange={(e) => setVal(e.target.value)} 
                onChange={(e)=>handleChangeLetterValue(e,id)}
                ref={inputRef} spellcheck="true" id="story" rows = "30" cols="47" placeholder="Write here..."></textarea>
                <input type="submit" className="submit" value="Save" onClick = {() => saveClicked(val)} /> 
                </div>
                
        </div>
    )
}

export default LetterModal;