const Applications = () => {
  const applications = [
    {
      title: "2019/2020 évi sportfejlesztési támogatás",
      description:
        "A Magyar Labdarúgó Szövetség jóváhagyta a PILISSZÁNTÓI SPORTEGYESÜLET 2019/2020.évi sportfejlesztési programját, melyhez 12.985.714,- FT TAO támogatást állapított meg.",
      link: "https://www.pilisszanto.hu/images/stories/hirek/sfp-hatarozat2020.pdf",
    },
    {
      title: "2020/2021 évi sportfejlesztési támogatás",
      description:
        "A Magyar Labdarúgó Szövetség jóváhagyta a PILISSZÁNTÓI SPORTEGYESÜLET 2020/2021.évi sportfejlesztési programját, melyhez 1.926.560,- FT TAO támogatást állapított meg.",
      link: "https://www.pilisszanto.hu/images/stories/hirek/tao-sfp.pdf",
    },
    {
      title: "2021/2022 évi sportfejlesztési támogatás",
      description:
        "A Magyar Labdarúgó Szövetség jóváhagyta a PILISSZÁNTÓI SPORTEGYESÜLET 2021/2022.évi sportfejlesztési programját, melyhez 9.642.402,- FT TAO támogatást állapított meg.",
      link: "https://www.pilisszanto.hu/images/stories/hirek/tao21-22hatp.pdf",
    },
    {
      title: "2022/2023 évi sportfejlesztési támogatás",
      description:
        "A Magyar Labdarúgó Szövetség jóváhagyta a PILISSZÁNTÓI SPORTEGYESÜLET 2022/2023.évi sportfejlesztési programját, melyhez 10.260.000,- FT TAO támogatást állapított meg.",
      link: "https://www.pilisszanto.hu/images/stories/hirek/tao22.pdf",
    },
    {
      title: "2023/2024 évi sportfejlesztési támogatás",
      description:
        "A Magyar Labdarúgó Szövetség jóváhagyta a PILISSZÁNTÓI SPORTEGYESÜLET 2023/2024.évi sportfejlesztési programját, melyhez 9.310.440,- FT TAO támogatást állapított meg.",
      link: "https://www.pilisszanto.hu/images/stories/hirek/sportprogram2023.pdf",
    },
    {
      title: "2024/2025 évi sportfejlesztési támogatás",
      description:
        "A Magyar Labdarúgó Szövetség jóváhagyta a PILISSZÁNTÓI SPORTEGYESÜLET 2024/2025.évi sportfejlesztési programját, melyhez 9.042.474,- FT TAO támogatást állapított meg. 2024. 05.23-án újabb támogatásról született határozat, mely további 1.355.889,- Ft TAO támogatást állapított meg.",
      link: "https://www.pilisszanto.hu/images/stories/hirek/tao-24-25.pdf",
    },
  ];
  return (
    <div className="applications">
      <h1>Pályázatok</h1>
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
    </div>
  );
};

export default Applications;
