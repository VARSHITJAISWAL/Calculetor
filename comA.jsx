import style from "./ComA.module.css"
import ComB from "./ComB.jsx"
function ComA(){
  return (
    <div className={style.innerBox}>
     <input className={style.inputBox} type="text" placeholder="Calculator"/>
      <ComB/>
    </div>
  )
}
export default ComA;