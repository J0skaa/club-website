import React from "react";

const FieldLocationWidget = () => {
  const address =
    "Pilisszántó Sporttelep, Pilisszántó Tavasz utca 1/d, Hungary";

  return (
    <div className="field-location-widget">
      <h3>Focipálya címe</h3>
      <p>{address}</p>
      <div className="map-container">
        <iframe
          title="Pilisszántó Sportpálya"
          src={
            "https://maps.app.goo.gl/NcVQZbCJ6xw8ZaE97?g_st=com.google.maps.preview.copy"
          }
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default FieldLocationWidget;
