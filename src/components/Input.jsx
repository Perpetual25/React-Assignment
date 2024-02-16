function Input() {
  return (
    <>
      <div className="general">
        <div>
          <input class="search-box" type="text" className="empty-box" />
        </div>
        <div>
          <input
            class="search-box"
            type="text"
            placeholder="Search Words"
            className="search-words"
          />
        </div>
        <div>
          <input
            class="search-box"
            type="text"
            placeholder="Add New Words"
            className="new-words"
          />
        </div>
      </div>
    </>
  );
}

export default Input;
