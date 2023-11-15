// import Image from 'next/image'
'use client'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <User name="nik"/> */}
      {/* <User name="aman"/>/ */}

      <h1>Shahsnak Varshney</h1>
      <button onClick={()=>alert("hello next")}>Click</button>
    </main>
  )
}

// const User=(props)=>{
//   return (
//     <>
//     <h1>
//       My name is {props.name}
//     </h1>
//     </>
//   )
// }
