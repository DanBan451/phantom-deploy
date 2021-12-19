import Job from "./job";
import React, { Component } from "react";
import $ from "jquery";

class Jobs extends Component {
  componentDidMount() {
    $(document).ready(function () {
      var outerContent = $(".jobs");
      var innerContent = $(".jobs > .job");
      outerContent.scrollLeft(
        (innerContent.width() - outerContent.width()) / 2
      );
    });
    console.log("in");
  }

  render() {
    return (
      <div>
        <div className="dummy mt-5">
          <h1>Phantom</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        {/* <div className="jobs" disableScrollParentFix={true}>
          <Job
            title="Medical message therapist"
            location="Houston"
            salary={89000}
            rating={5}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          />
          <Job
            title="Medical physicist"
            location="Austin"
            salary={90000}
            rating={3}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'}
          />
          <Job
            title="Medical social worker"
            location="College Station"
            salary={60000}
            rating={4}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'}
          />
        </div> */}

      </div>
    );
  }
}

export default Jobs;
