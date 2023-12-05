const Contact = () => {
  return (
    <>
      <div className="header">
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <form>
          <input
            type="text"
            className="border border-black m-2 p-2 rounded-lg"
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black m-2 p-2 rounded-lg"
            placeholder="message"
          />
          <button className="border border-black m-2 p-2 bg-gray-300 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
