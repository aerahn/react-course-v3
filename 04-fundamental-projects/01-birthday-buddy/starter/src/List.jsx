const List = ({ people }) => {
  return;
  people.map(() => {
    return (
      <section>
        <Person key={people.id} {...props} />
      </section>
    );
  });
};
export default List;
