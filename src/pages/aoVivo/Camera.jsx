const Camera = () => {
  return (
    <div className="aspect-video flex items-center justify-center w-full max-w-[80vw] md:max-w-[800px]">
      <iframe
        src=""
        className="bg-main h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={false}></iframe>
    </div>
  );
};

export default Camera;
