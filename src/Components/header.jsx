function Header() {
  const obj = {
      name:"Pavan object",
      sirname:"jangale",
      adress:"Pune"
  }
    return (
      
      <div className="header">
      <h1>{obj.name}</h1>
      <h3>{obj.sirname}</h3>
      <h2>{obj.adress}</h2>
      <span>_________________________________</span>
    </div>
    );
};
export default Header;