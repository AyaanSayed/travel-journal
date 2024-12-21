export default function Header(){
  return <header style={{backgroundColor: "#F55A5A", display:"flex", justifyContent:"center", alignItems: "center", height: 55 }}>
    <img width={24} src="src/assets/globe.png" alt="globe-icon" />
    <h1 style={{marginLeft: 7, fontSize:16, color: "white", fontWeight: 500}}>my travel journal.</h1>
  </header>
}