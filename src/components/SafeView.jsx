import PropTypes from 'prop-types';

const SafeView = ({ children, id, classes }) => {
  const className = `h-full w-full flex items-center justify-center ${classes}`;

  return (
    <section id={id} className={className}>
      <div className="flex flex-col min-w-[80vw] max-w-5xl items-center justify-center gap-9 py-6 px-4 sm:px-10">
        <div className="min-w-[80vw] max-w-7 mx-auto md:max-w-xl xl:max-w-3xl">
          {children}
        </div>
      </div>
    </section>
  );
};

SafeView.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SafeView;
