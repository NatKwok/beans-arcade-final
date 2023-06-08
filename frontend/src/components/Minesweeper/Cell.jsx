const Cell = ({col, i, j, snek, gotNug, flag, onLClick, onRClick}) => {
    const cellValue = (cellData) => {
        const {isSnake, neighbours, isRevealed, isPoint, isFlagged} = cellData;
            if(!isRevealed) return isFlagged ? <img src={flag} alt="flag" width="55%"/> : null;
            if(isSnake) return <img src={snek} alt="snek" width="95%"/>;
            if(!isPoint && !neighbours) return <img src={gotNug} alt="got!" width="90%"/>;
            if(neighbours) return neighbours;
           };

    return(
        <div style={{border: "1px solid black", placeContent: 'center center', display: 'flex', 
        alignItems: 'center', backgroundImage: 'url(' + require('../../images/PixelSand.png') + ')',
        fontSize: "140%", color: "palegreen", fontWeight: "bold"}} 
        data-dimension={`${i}-${j}`}
        onClick={(e) => onLClick(e,i,j)} 
        onContextMenu={(e) => onRClick(e,i,j)}>
            {cellValue(col)}
        </div>
    )
};

export default Cell;

