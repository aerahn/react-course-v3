const Person = ({ name, age, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <div className="person">
        <img className="img" src={image} />
      </div>
    </div>
  );
};
export default Person;
