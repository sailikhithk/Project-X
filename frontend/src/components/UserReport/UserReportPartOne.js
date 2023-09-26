const UserReportPartOne = () => {
  return (
    <div className="row mt-5 page page-container" id="page2">
      <div className="bg-white" style={{padding: 0}}>
        <div className="col-sm-12 col-lg-12 report2-sub-section1">
          <div className="d-flex justify-content-end align-items-center report2-top-container ">
            <span className="me-3 report2-btn-container">
              <span className="fs-5 fw-normal report2-btn">Part One</span>
            </span>
          </div>
        </div>
      </div>
      <div className="row bg-white ms-2 mt-2" style={{width: '95%'}} >
        <div className="col-sm-12 col-lg-12 mt-2">
          <span className="fs-3 fw-semibold text">
            1. Behavioral Presentation and Grooming
          </span>
        </div>
      </div>
      <div className="row bg-white p-3 " style={{width: '95%', margin: '0 auto'}}>
        <div className="col-sm-4 col-lg-4 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-red text">3/10</span>
          </div>
          <div className="mt-1">
            <span className="fs-5 fw-semibold text">Eye contact</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              Arpitha could benefit frommaintaining more consistenteye contact,
              which canestablish trust and foster asense of connection with
              theinterviewer.
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-green text">8/10</span>
          </div>
          <div>
            <span className="fs-5 fw-semibold text">Posture</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              While mostly upright andengaged, there weremoments of slouching
              whichcould indicate a lack ofconfidence or interest.
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-green text">6/10</span>
          </div>
          <div>
            <span className="fs-5 fw-semibold text">Grooming</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              Arpitha was well-dressed andprofessional, in line withDeloitte's
              standards
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-white p-3 " style={{width: '95%', margin: '0 auto'}}>
        <div className="col-sm-4 col-lg-4 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-red text">2/10</span>
          </div>
          <div>
            <span className="fs-5 fw-semibold text">Hand Gestures</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              Hand gestures can add valueto verbal communication, butexcessive
              or nervousgesturing can be distracting.Arpitha should aim
              forbalanced and meaningfulhand movements to underlinekey points.
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-green text">8/10</span>
          </div>
          <div>
            <span className="fs-5 fw-semibold text">Facial Expressions</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              Arpitha has a pleasant facialexpression that indicates herinterest
              and engagement inthe conversation. However,she could benefit from
              moreexpressive reactions to reflectunderstanding or agreementwith
              the interviewer.
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-orange text">6/10</span>
          </div>
          <div>
            <span className="fs-5 fw-semibold text">Background and Lighting</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              The background was cleanand uncluttered, which is idealfor a video
              interview. However,the lighting could beimproved. Frontal, soft
              lightingwill reduce shadows and makethe candidate more
              clearlyvisible.
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-white p-3" style={{width: '95%', margin: '0 auto'}}>
        <div className="col-sm-4 col-lg-6 mb-3 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-green text">9/10</span>
          </div>
          <div>
            <span className="fs-5 fw-semibold text">Audio Quality</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              The audio was clear andwithout significantbackground noise, which
              isessential for effectivecommunication during theinterview.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 mb-3 center-align">
          <div>
            <span className="fs-1 fw-bold report2-score-green text">9/10</span>
          </div>
          <div>
            <span className="fs-5 fw-semibold text">Device Position</span>
          </div>
          <div className="mt-2">
            <p className="fs-6 fw-normal text-break report2-text text">
              The device from which Arpitha wasconducting the interview was
              placedat a proper angle, allowing a clearview of her face and
              upper body.This is critical for non-verbalcommunication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserReportPartOne;
