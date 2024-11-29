import avatar from "../assets/avatar.png";

const AreaPersonale = () => {
  return (
    <>
      <main>
        <div className="container mx-auto" style={{ maxWidth: "650px" }}>
          <h1 className="border-bottom pb-2">Edit Profile</h1>
          <div className="d-flex flex-column flex-lg-row mt-4">
            <div className="avatar2 mb-4">
              <img src={avatar} alt="avatar" className="img-fluid" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="#FFFFFF"
                className="bi bi-pencil-fill ms-1 border border-white rounded-circle p-1 changeAvatar"
                viewBox="-2 -2 19 20"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </div>
            <div className="ms-lg-5">
              <div className="pb-2 border-bottom">
                <div className="bg-secondary mb-4 p-2">Strive Student</div>
                <div className="mb-2">Language:</div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="bottoneTV px-4 btn bg-black dropdown-toggle mb-3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Italiano
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button className="dropdown-item" type="button">
                        Inglese
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Russo
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Cinese
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Siciliano
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Epicodeano
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="my-3">
                <p>Maturity Settings</p>
              </div>
              <div className="maturityRatings text-center py-1">
                ALL MATURITY RATINGS
              </div>
              <div className="my-3">
                Show titles of
                <span className="fw-bold">all maturity ratings</span> for this
                profile
              </div>
              <button className="bottoniProfile btn btn-outline-secondary p-1 px-4 mb-3">
                EDIT
              </button>
              <div className="border-top pt-3 fs-5 mb-3">Autoplay controls</div>

              <div>
                <input className="checkbox" type="checkbox" id="html" />
                <label htmlFor="html">
                  Autoplay next episode in a series on all devices.
                </label>
              </div>

              <div>
                <input className="checkbox" type="checkbox" id="html" />
                <label htmlFor="html">
                  Autoplay previews while browsing on all devices.
                </label>
              </div>
            </div>
          </div>
          <div className="my-4 border-top pt-4 fs-5">
            <button className="bottoniProfile btn me-4 px-4 btn-outline-secondary">
              SAVE
            </button>
            <button className="bottoniProfile btn me-4 px-4 btn-outline-secondary">
              CANCEL
            </button>
            <button className="bottoniProfile btn me-4 px-4 btn-outline-secondary">
              DELETE PROFILE
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default AreaPersonale;
