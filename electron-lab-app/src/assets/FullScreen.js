const FullScreen = ({ fill = "#000000", isFullScreen = false }) => {
  if (!isFullScreen)
    return (
      <svg
        height="18"
        width="18"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"
          fill={fill}
        />
      </svg>
    );
  else
    return (
      <svg
        height="18"
        width="18"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z"
          fill={fill}
        />
      </svg>
    );
};

export default FullScreen;
