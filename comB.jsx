import style from "./ComB.module.css"
function ComB() {
    return (
        <div className={style.grid}>
            <button className={style.btn}>1</button>
            <button className={style.btn}>2</button>
            <button className={style.btn}>3</button>
            <button className={style.btn}>/</button>
            <button className={style.btn}>4</button>
            <button className={style.btn}>5</button>
            <button className={style.btn}>6</button>
            <button className={style.btn}>x</button> <button className={style.btn}>7</button> <button className={style.btn}>8</button> <button className={style.btn}>9</button> <button className={style.btn}>-</button> <button className={style.btn}>DEC</button> <button className={style.btn}>.</button> <button className={style.btn}>AC</button>
             <button className={style.btn}>+</button>
        </div>
    )
}
export default ComB;