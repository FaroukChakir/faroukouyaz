export default function Welcome(props) {
  if(props== null)
  {
    return <h1>Hello,no name</h1>;
    
  }
  else
  {
  return <h1>Hello, {props.name}</h1>;
}
  }