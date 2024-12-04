import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7619190495415!2d-121.96305768424155!3d37.35410797983964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccb0d4804d89%3A0x7587d3abec13d21c!2sSanta%20Clara%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1698920000000!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
