const FetchingDeDatos = ({ users, createUser }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
            <h3>Email: {user.email}</h3>
          </div>
        );
      })}

      <button onClick={createUser}>Create User</button>
    </>
  );
};

export default FetchingDeDatos;
