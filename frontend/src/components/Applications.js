import useFetch from "../useFetch";

const Applications = () => {
  const { data: applications, error } = useFetch(
    "http://localhost:5000/api/applications"
  );

  return (
    <div className="applications">
      <h1>Pályázatok</h1>
      {error ? (
        <div>An error occurred: {error}</div>
      ) : !applications ? (
        <div>Loading...</div>
      ) : (
        <ul className="applications-list">
          {applications.map((app, index) => (
            <li key={index} className="application">
              <h3>{app.title}</h3>
              <p>{app.description}</p>
              <a
                href={app.link}
                className="application-link"
                target="blank"
                rel="noopener noreferrer"
              >
                Letöltés
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Applications;
