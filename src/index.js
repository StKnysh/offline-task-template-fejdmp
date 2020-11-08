import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Welcome = () => {
  return (
    <>
      <img
        className="snappy-bg"
        src="https://assets-global.website-files.com/5bbcff0ac0930cbd4057ac87/5db810056c50c2be49a8726d_candy-separator.svg"
      />
      <div className="readme">
        <div>
          <img
            className="snappy-logo"
            src="https://lh5.googleusercontent.com/E59fs35opU1gVJcPIf3vX83NtGm-G9qFRXSTSoRXO2TIbq3hofH28lBFjohO-obN9aRpnWliURpeSGgRVP9M4HrDpRGHRN7yMV_cCJb5Pn6hbbW9krZf1lf2y4wyj-LtwcIRXdFa"
          />
        </div>
        <p>
          <h3>Welcome to your technical task</h3>
          <div>Below you will find 5 separate tasks</div>
          <br />
          <div>Task1, Task2 and Task3 are mandatory</div>
          <br />
          <div>Pick between Task4 and Task5</div>
          <br />
          <div>
            Please take the time to read through the instructions and also
            through the notes we have provided
          </div>
          <br />
          <div>
            If you feel like you're not sure about something, just go with your
            instincts :D
          </div>
        </p>
        <br />
        <hr />
        <div className="notice">
          <h3>*** BEFORE YOU START ***</h3>

          <ol>
            <li>
              Make sure you do an initial 'save' (CMD+S on Mac or Ctrl+S on
              Windows) inside the file you're in.
            </li>
            <li>
              After hitting 'save', you should see two things:
              <ul>
                <li>
                  {`@anonymous/offline-task-template-{id} on the top left corner`}
                </li>
                <li>'Save' button on the top bar</li>
              </ul>
            </li>
            <li>
              If you don't see the top indications, change something small in
              the file you're in and then hit save
            </li>
            <li>
              Don't forget to constantly save your progress as you're advancing
              through the tasks
            </li>
            <li>
              At the bottom you'll find instructions regarding how to share your
              project with us once you're done
            </li>
          </ol>

          <img
            className="notice-img"
            src="https://i.ibb.co/xsDjcQy/Screen-Shot-2020-11-07-at-23-21-03.png"
          />

          <h3>GOOD LUCK!</h3>
        </div>
        <hr />
        <br />
        <h1>Task1 - Calender API</h1>
        <ul>
          <li>
            Design an API interface for a calendar APP with the 3 endpoints
            below:
            <ul>
              <li>Create new event</li>
              <li>Get calendar events</li>
              <li>Get available times</li>
              <li>Delete calender event</li>
            </ul>
          </li>
        </ul>
        <h4>Task Notes</h4>
        <ul>
          <li>
            Define the following properties per route
            <ul>
              <li>Method</li>
              <li>Path</li>
              <li>Path Parameteres</li>
              <li>Query Parameters - Describe field name</li>
              <li>Body - Describe field name, type and optionality</li>
            </ul>
          </li>
          <li>Describe route response</li>
        </ul>
        <br />
        <hr />
        <br />
        <h1>Task2 - Code Review</h1>
        <ul>
          <li>
            Comment and describe the problems and bad practices in the code
          </li>
          <li>Provide solutions and good practices for the code</li>
          <li>
            Feel free to copy the code into a JS file and write it from scratch
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <h1>Task3 - Async/Await</h1>
        Rewrite the code to use async/await inside of callback-based promises
        <h4>Task Notes</h4>
        <ul>
          <li>Keep the asynchronous nature of the original code</li>
        </ul>
        <hr />
        <br />
        <h1>Task4 - Input with delay</h1>
        <ul>
          <li>Create a controlled input</li>
          <li>
            Write a logic that will trigger an "XHR" with a delay after typing
            more than X characters
          </li>
          <li>
            Present an indication if the client is waiting for a server response
          </li>
        </ul>
        <h4>Task Notes</h4>
        <ul>
          <li>Make sure you do not trigger multiple requests to the server</li>
          <li>Bonus - Do not use external libraries to handle the delay</li>
        </ul>
        <br />
        <hr />
        <br />
        <h1>Task5 - Indexed word search</h1>A large number of documents needs to
        be indexed and made easy to search.
        <h4>Task Notes</h4>
        <ul>
          <li>
            Implement a program which will first index the given documents and
            then allow the user to search through the documents.{" "}
          </li>
          <li>The user will search the documents by sentences </li>
          <li>
            Find the documents that contain some or all of the words from the
            search query.{" "}
          </li>
          <li>
            No need to consider comparison of words like run / running to be the
            same.{" "}
          </li>
          <li>Ignore common words and words with 2 letters or less </li>
          <li>
            The search results should be scored and returned by order with
            relevance probability.{" "}
          </li>
          <li>Implement found word highlighting. </li>
          <li>
            The more times the word searched appears in the document the higher
            it would be ranked{" "}
          </li>
          <li>You may use lodash if needed. </li>
          <li>Consider the speed of the search. </li>
        </ul>
        <hr />
        <br />
        <div className="notice">
          <h3>*** YOU'VE CROSSED THE FINISH LINE ***</h3>

          <ol>
            <li>
              In order to share your poject with us, please click on the share
              button at the top
              <img
                className="notice-img"
                src="https://i.ibb.co/xDxjk3R/Screen-Shot-2020-11-07-at-23-27-42.png"
              />
            </li>

             <li>
              Copy the sharable link inside the 'Editor URL' box and send it to us
              <img
                className="notice-img"
                src="https://i.ibb.co/k2STFMm/Screen-Shot-2020-11-07-at-23-28-21.png"
              />
            </li>
          </ol>

          <h3>THANK YOU!</h3>
        </div>
      </div>

      <img
        className="snappy-bg"
        src="https://assets-global.website-files.com/5bbcff0ac0930cbd4057ac87/5db810056c50c2be49a8726d_candy-separator.svg"
      />
    </>
  );
};

ReactDOM.render(<Welcome />, document.getElementById("root"));
