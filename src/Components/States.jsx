
import styles from "../style"
import {stats} from '../constants/index'
const States = () => (
  <section className="flex flex-row justify-evenly flex-wrap text-white">
    {
      stats.map((item) => (
        <div className="flex items-center">
          <h4 className="font-mono text-4xl text-white font-bold z-[120] max-sm:text-2xl">{item.value}</h4>
          <p className="text-2xl max-sm:text-xl leading-16">{item.title}</p>
        </div>
      ))
    }
  </section>
)


export default States