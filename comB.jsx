import style from "./ComB.module.css"
function ComB() {
    let value=[1,2,3,"/",4,5,6,"x",7,8,9,"-","DEC",".","AC","+"]
    return (



        <div className={style.grid}>
            {
                value.map((item)=><button className={style.btn}>{item}</button>

                )
            }
            
        </div>
    )
}
export default ComB;
