const Person = (name, age, image) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>{age}</div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};
export default Person;
