const MyTvShowsSection = () => {
  return (
    <>
      <div className="my-3 bg-dark d-flex justify-content-between">
        <div className=" d-flex align-items-center flex-column flex-sm-row ms-5 ms-sm-0">
          <h1 className="me-sm-4">TV Shows</h1>
          <div className="btn-group">
            <button
              type="button"
              className="bottoneTV px-4 btn bg-black dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">
                  Horror
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Drama
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Comedy
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Thriller
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center d-none d-sm-flex">
          <div className="px-3 pb-1 border border-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-text-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <div className="px-3 pb-1 border border-light-subtle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-grid-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTvShowsSection;
