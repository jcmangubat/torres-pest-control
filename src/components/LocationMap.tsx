
const LocationMap = () => {
  return (
    <div className="w-full h-[340px]">
      <iframe
        title="Torres Pest Control Location"
        src="https://maps.google.com/maps?q=7.118246885181027,125.49535579013283&z=12&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md shadow-sm"
      />
    </div>
  );
};

export default LocationMap;
